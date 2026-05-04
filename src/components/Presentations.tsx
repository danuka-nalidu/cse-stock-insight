import { motion } from "framer-motion";
import { Presentation, ExternalLink, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const proposalPdf = new URL("../slides/Proposal presentation.pdf", import.meta.url).href;
const progress2Pptx = new URL("../slides/Progress presentaion 2.pdf", import.meta.url).href;

const slides = [
  {
    title: "Proposal Presentation",
    date: "August 2024",
    status: "Available",
    color: "emerald",
    fileUrl: "/Proposal presentation.pptx",
    openUrl: proposalPdf,
    preview: "/PP.png",
    filePath: "src/slides/Proposal presentation.pdf",
  },
  {
    title: "Progress Presentation 1",
    date: "December 2024",
    status: "Available",
    color: "emerald",
    fileUrl: "/Progress presentation 1.pptx",
    openUrl: "",
    preview: "/PP1.png",
    filePath: "Not uploaded yet",
  },
  {
    title: "Progress Presentation 2",
    date: "April 2025",
    status: "Available",
    color: "cyan",
    fileUrl: "/Progress presentaion 2.pdf",
    openUrl: progress2Pptx,
    preview: "/pp2.png",
    filePath: "src/slides/Progress presentaion 2.pdf",
  },
  {
    title: "Final Presentation",
    date: "August 2025",
    status: "Available",
    color: "emerald",
    fileUrl: "/Proposal presentation.pptx",
    openUrl: proposalPdf,
    preview: "/final.png",
    filePath: "src/slides/Proposal presentation.pdf",
  },
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="glass-strong rounded-2xl overflow-hidden group"
              >
                {/* Slide preview frame */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-navy-deep via-navy to-slate2 overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />

                  {s.preview && !isComing ? (
                    <img
                      src={s.preview}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      {isComing ? (
                        <div className="text-center">
                          <Plus className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                          <p className="text-muted-foreground/70 mt-2 text-sm">Reserved Slot</p>
                        </div>
                      ) : (
                        <div className="text-center px-6">
                          <Presentation className="h-12 w-12 text-gold mx-auto animate-float" />
                          <p className="font-display text-xl mt-3 text-foreground/90">{s.title}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="outline"
                      className={
                        isComing
                          ? "bg-muted text-muted-foreground border-border text-[10px]"
                          : "bg-gold/12 text-gold border-gold/30 text-[10px] backdrop-blur-sm"
                      }
                    >
                      {s.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-display font-semibold">{s.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.date}</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-1 truncate max-w-[220px]">{s.filePath}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button variant="glass" size="sm" disabled={isComing} asChild={!!s.openUrl && !isComing}>
                      {s.openUrl && !isComing ? (
                        <a href={s.openUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-2" /> Open
                        </a>
                      ) : (
                        <span><ExternalLink className="h-3.5 w-3.5 mr-2" /> Open</span>
                      )}
                    </Button>
                    <Button variant="hero" size="sm" disabled={isComing} asChild={!!s.fileUrl && !isComing}>
                      {s.fileUrl && !isComing ? (
                        <a href={s.fileUrl} download>
                          <Download className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span><Download className="h-3.5 w-3.5" /></span>
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
