import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => {
  return (
    <section className="relative pt-36 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gold/8 blur-3xl -z-10" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;