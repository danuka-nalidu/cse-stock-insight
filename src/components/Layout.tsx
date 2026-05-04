import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Layout = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  // Determine if this is a genuine navigation (not initial load)
  const key = pathname;
  if (prevPathRef.current !== pathname) {
    prevPathRef.current = pathname;
    isFirstRender.current = false;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        {/*
          No AnimatePresence / mode="wait" here.
          We use a plain motion.div with key={pathname} so React unmounts/remounts
          the page on every navigation, but the entrance animation starts immediately
          without waiting for an exit phase that can get stuck.
        */}
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
