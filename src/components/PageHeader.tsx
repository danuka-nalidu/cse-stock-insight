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

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gold/8 blur-3xl -z-10"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-8 right-1/4 w-64 h-64 rounded-full bg-accent/6 blur-3xl -z-10"
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-xs uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-2"
          >
            <span className="inline-block w-6 h-px bg-gold/50" />
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 text-lg text-muted-foreground max-w-2xl"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
