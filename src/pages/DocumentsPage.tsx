import PageHeader from "@/components/PageHeader";
import Documents from "@/components/Documents";

const DocumentsPage = () => (
  <>
    <PageHeader
      eyebrow="04 — Documents"
      title={<>Research <span className="text-gradient-emerald">documents</span>.</>}
      description="View or download the project charter, proposal, checklists and final dissertation."
    />
    <Documents />
  </>
);

export default DocumentsPage;