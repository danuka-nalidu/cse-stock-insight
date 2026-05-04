import { motion } from "framer-motion";
import { Download, Eye, FileText, FileCheck2, FileSignature, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fileURLToPath } from "url";

const projectCharterFileName = "Combined Thesis Draft.pdf";
const ProposalDocumentFileName = "Proposal presentation (1).pdf";
const finalDocumentFileName = "Combined Thesis Draft.pdf";
const finalDoccomponentAFileName = "IT22069672_Draft.pdf";
const finalDoccomponentBFileName = "IT22102614_draft.pdf";
const finalDoccomponentCFileName = "IT22306654_Final_Report_Draft.pdf";
const finalDoccomponentDFileName = "IT22271532_Final_Report_Draft.pdf";
const projectCharterPdf = `${import.meta.env.BASE_URL}docs/${encodeURIComponent(projectCharterFileName)}`;
const ProposalDocumentPdf = `${import.meta.env.BASE_URL}docs/${encodeURIComponent(ProposalDocumentFileName)}`;
const finalDocumentPdf = `${import.meta.env.BASE_URL}docs/${encodeURIComponent(finalDocumentFileName)}`;
const finalDoccomponentAPdf = `${import.meta.env.BASE_URL}docs/${encodeURIComponent(finalDoccomponentAFileName)}`;
const finalDoccomponentBFileUrl = `${import.meta.env.BASE_URL}docs/${encodeURIComponent(finalDoccomponentBFileName)}`;
const finalDoccomponentCFileUrl = `${import.meta.env.BASE_URL}docs/${encodeURIComponent(finalDoccomponentCFileName)}`;
const finalDoccomponentDFileUrl = `${import.meta.env.BASE_URL}docs/${encodeURIComponent(finalDoccomponentDFileName)}`;

const docs = [
  {
    icon: FileSignature,
    title: "Project Charter",
    type: "PDF · 1 doc",
    desc: "Initial project agreement and scope definition.",
    fileUrl: projectCharterPdf,
  },
  { icon: FileText, title: "Proposal Document", type: "PDF · 1 doc", desc: "Comprehensive research proposal with methodology.", fileUrl: ProposalDocumentPdf },
  { icon: FileCheck2, title: "Check List Documents", type: "PDF · Multi", desc: "Submission checklists across all assessment phases.", fileUrl: null },
  { icon: FileStack, title: "Final Document — Main", type: "PDF · Main", desc: "Consolidated final research thesis (group).", fileUrl: finalDocumentPdf },
  { icon: FileText, title: "Dushan Waranakulasooriya - Sentiment Analysis module", type: "PDF · Sub", desc: "Price prediction module — individual report.", fileUrl: finalDoccomponentAPdf },
  { icon: FileText, title: "Banuka wahalathanthri - Dividend Forecasting", type: "PDF · Sub", desc: "Dividend forecasting module — individual report.", fileUrl: finalDoccomponentBFileUrl },
  { icon: FileText, title: "Danuka Nalindu- Open Price Prediction", type: "PDF · Sub", desc: "Risk assessment module — individual report.", fileUrl: finalDoccomponentCFileUrl },
  { icon: FileText, title: "Madhawa Awishka- Risk Assessment", type: "PDF · Sub", desc: "Portfolio optimisation module — individual report.", fileUrl: finalDoccomponentDFileUrl },
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
              <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center group-hover:bg-gradient-gold transition-colors">
                <d.icon className="h-5 w-5 text-gold group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display font-semibold leading-tight">{d.title}</h3>
              <p className="text-[11px] uppercase tracking-wider text-gold mt-1">{d.type}</p>
              <p className="text-sm text-muted-foreground mt-3 flex-1">{d.desc}</p>
              <div className="mt-5 flex gap-2">
                {d.fileUrl ? (
                  <Button variant="glass" size="sm" className="flex-1" asChild>
                    <a href={d.fileUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-3.5 w-3.5" /> View
                    </a>
                  </Button>
                ) : (
                  <Button variant="glass" size="sm" className="flex-1">
                    <Eye className="h-3.5 w-3.5" /> View
                  </Button>
                )}
                {d.fileUrl ? (
                  <Button variant="hero" size="sm" className="flex-1" asChild>
                    <a href={d.fileUrl} download={d.fileUrl.split('/').pop()} target="_blank" rel="noopener noreferrer">
                      <Download className="h-3.5 w-3.5" /> Download
                    </a>
                  </Button>
                ) : (
                  <Button variant="hero" size="sm" className="flex-1">
                    <Download className="h-3.5 w-3.5" /> Download
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
