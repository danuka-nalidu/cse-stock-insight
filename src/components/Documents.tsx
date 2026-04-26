import { motion } from "framer-motion";
import { Download, Eye, FileText, FileCheck2, FileSignature, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";

const docs = [
  { icon: FileSignature, title: "Project Charter", type: "PDF · 1 doc", desc: "Initial project agreement and scope definition." },
  { icon: FileText, title: "Proposal Document", type: "PDF · 1 doc", desc: "Comprehensive research proposal with methodology." },
  { icon: FileCheck2, title: "Check List Documents", type: "PDF · Multi", desc: "Submission checklists across all assessment phases." },
  { icon: FileStack, title: "Final Document — Main", type: "PDF · Main", desc: "Consolidated final research thesis (group)." },
  { icon: FileText, title: "Final Document — Component A", type: "PDF · Sub", desc: "Price prediction module — individual report." },
  { icon: FileText, title: "Final Document — Component B", type: "PDF · Sub", desc: "Dividend forecasting module — individual report." },
  { icon: FileText, title: "Final Document — Component C", type: "PDF · Sub", desc: "Risk assessment module — individual report." },
  { icon: FileText, title: "Final Document — Component D", type: "PDF · Sub", desc: "Portfolio optimisation module — individual report." },
];

const Documents = () => {
  return (
    <section id="documents" className="pb-28 pt-4 relative">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {docs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group glass-strong rounded-2xl p-5 flex flex-col hover:-translate-y-1 hover:border-emerald2/30 transition-all duration-500"
            >
              <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center group-hover:bg-gradient-emerald transition-colors">
                <d.icon className="h-5 w-5 text-emerald2 group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display font-semibold leading-tight">{d.title}</h3>
              <p className="text-[11px] uppercase tracking-wider text-emerald2 mt-1">{d.type}</p>
              <p className="text-sm text-muted-foreground mt-3 flex-1">{d.desc}</p>
              <div className="mt-5 flex gap-2">
                <Button variant="glass" size="sm" className="flex-1">
                  <Eye className="h-3.5 w-3.5" /> View
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  <Download className="h-3.5 w-3.5" /> Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;