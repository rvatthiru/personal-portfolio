"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mounts its children the first time they scroll into view, which lets
 * "on mount" animations play at the right moment.
 */
export default function InViewMount({
  children,
  className,
  margin = "0px 0px -10% 0px",
}: {
  children: React.ReactNode;
  className?: string;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin, shown]);

  return (
    <div ref={ref} className={className}>
      {shown ? children : null}
    </div>
  );
}
