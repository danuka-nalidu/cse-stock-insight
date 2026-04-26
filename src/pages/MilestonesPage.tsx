import PageHeader from "@/components/PageHeader";
import Milestones from "@/components/Milestones";

const MilestonesPage = () => (
  <>
    <PageHeader
      eyebrow="03 — Milestones"
      title={<>Project <span className="text-gradient-emerald">milestones</span>.</>}
      description="Key assessments, dates and marks allocation across the academic year."
    />
    <Milestones />
  </>
);

export default MilestonesPage;