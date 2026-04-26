import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";

const AboutPage = () => (
  <>
    <PageHeader
      eyebrow="06 — About"
      title={<>Meet the <span className="text-gradient-emerald">team</span>.</>}
      description="The researchers, supervisors and contributors behind CSE Insights."
    />
    <Team />
  </>
);

export default AboutPage;