import PageHeader from "@/components/PageHeader";
import Presentations from "@/components/Presentations";

const PresentationsPage = () => (
  <>
    <PageHeader
      eyebrow="05 — Slides"
      title={<>Past <span className="text-gradient-emerald">presentations</span>.</>}
      description="Slide decks delivered across project milestones."
    />
    <Presentations />
  </>
);

export default PresentationsPage;