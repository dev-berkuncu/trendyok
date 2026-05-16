"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedPage({ children, className = "" }: AnimatedPageProps) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
