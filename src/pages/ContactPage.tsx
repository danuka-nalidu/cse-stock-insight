import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <>
    <PageHeader
      eyebrow="07 — Contact"
      title={<>Let's <span className="text-gradient-emerald">connect</span>.</>}
      description="Reach out for collaboration, feedback or research enquiries."
    />
    <Contact />
  </>
);

export default ContactPage;