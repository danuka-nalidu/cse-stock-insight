import { motion } from "framer-motion";
import { Presentation, ExternalLink, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const slides = [
  { title: "Proposal Presentation", date: "August 2024", status: "Available", color: "emerald", fileUrl: "/Proposal presentation.pptx", preview: "/preview-proposal.png" },
  { title: "Progress Presentation 1", date: "December 2024", status: "Available", color: "emerald", fileUrl: "/Progress presentation 1.pptx", preview: "/preview-progress-1.png" },
  { title: "Progress Presentation 2", date: "April 2025", status: "Available", color: "cyan", fileUrl: "/Progress presentaion 2.pptx", preview: "/preview-progress-2.png" },
  { title: "Final Presentation", date: "August 2025", status: "Coming Soon", color: "muted" },
];

const Presentations = () => {
  return (
    <section id="presentations" className="pb-28 pt-4 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-5">
          {slides.map((s, i) => {
            const isComing = s.status === "Coming Soon";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-strong rounded-2xl overflow-hidden group"
              >
                {/* Slide preview frame */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-navy-deep via-navy to-slate2 overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  {s.preview && !isComing ? (
                    <img src={s.preview} alt={s.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      {isComing ? (
                        <div className="text-center">
                          <Plus className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                          <p className="text-muted-foreground/70 mt-2 text-sm">Reserved Slot</p>
                        </div>
                      ) : (
                        <div className="text-center px-6">
                          <Presentation className="h-12 w-12 text-emerald2 mx-auto animate-float" />
                          <p className="font-display text-xl mt-3 text-foreground/90">{s.title}</p>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="outline"
                      className={
                        isComing
                          ? "bg-muted text-muted-foreground border-border text-[10px]"
                          : "bg-emerald2/15 text-emerald2 border-emerald2/30 text-[10px]"
                      }
                    >
                      {s.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display font-semibold">{s.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="glass" size="sm" disabled={isComing} asChild>
                      {s.fileUrl ? (
                        <a href={s.fileUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-2" /> Open
                        </a>
                      ) : (
                        <span>
                          <ExternalLink className="h-3.5 w-3.5 mr-2" /> Open
                        </span>
                      )}
                    </Button>
                    <Button variant="hero" size="sm" disabled={isComing} asChild>
                      {s.fileUrl ? (
                        <a href={s.fileUrl} download>
                          <Download className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span>
                          <Download className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Presentations;