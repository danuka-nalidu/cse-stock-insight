import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 1800 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric suffix/prefix
    const match = value.match(/^(\D*)(\d+\.?\d*)(\D*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const prefix = match[1] || "";
    const target = parseFloat(match[2]);
    const suffix = match[3] || "";
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target * 10) / 10;
      const formatted = Number.isInteger(current) ? String(current) : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
};

export default AnimatedCounter;
