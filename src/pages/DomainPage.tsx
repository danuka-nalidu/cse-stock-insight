import PageHeader from "@/components/PageHeader";
import Domain from "@/components/Domain";

const DomainPage = () => (
  <>
    <PageHeader
      eyebrow="02 — Domain"
      title={<>The research <span className="text-gradient-emerald">landscape</span>.</>}
      description="Navigate the academic foundation, identified gap, and engineering blueprint behind our system."
    />
    <Domain />
  </>
);

export default DomainPage;