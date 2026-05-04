import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-12">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-gold grid place-items-center">
            <TrendingUp className="h-4 w-4 text-primary-foreground" />
          </span>
          <p className="text-sm">
            <span className="font-display font-semibold">CSE Insights</span>
            <span className="text-muted-foreground"> — Final Year Research © 2025</span>
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Sri Lanka Institute of Information Technology · Faculty of Computing
        </p>
      </div>
    </footer>
  );
};

export default Footer;