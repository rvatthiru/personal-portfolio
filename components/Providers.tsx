"use client";

import { MotionConfig } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  // `user` honours the OS-level "reduce motion" setting for all transform animations.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
