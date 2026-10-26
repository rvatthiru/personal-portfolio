"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Mounts its children the first time they scroll into view, which lets
 * "on mount" animations play at the right moment.
 */
export default function InViewMount({
  children,
  className,
  margin = "0px 0px -15% 0px",
}: {
  children: React.ReactNode;
  className?: string;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as `${number}px` });
  return (
    <div ref={ref} className={className}>
      {inView ? children : null}
    </div>
  );
}
