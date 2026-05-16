"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const POINTS = 20;
const W = 120;
const H = 40;

function gen(prev: number): number {
  return Math.max(10, Math.min(90, prev + (Math.random() - 0.48) * 15));
}

function buildPath(data: number[]): string {
  const step = W / (POINTS - 1);
  const sy = (v: number) => 4 + ((100 - v) / 100) * (H - 8);
  let d = `M 0 ${sy(data[0])}`;
  for (let i = 1; i < data.length; i++) {
    const x = i * step;
    const y = sy(data[i]);
    const px = (i - 1) * step;
    const py = sy(data[i - 1]);
    d += ` C ${px + step * 0.4} ${py}, ${x - step * 0.4} ${y}, ${x} ${y}`;
  }
  return d;
}

export default function Sparkline({ color = "#2563EB" }: { color?: string }) {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const a = [50];
    for (let i = 1; i < POINTS; i++) a.push(gen(a[i - 1]));
    setData(a);
  }, []);

  const tick = useCallback(() => {
    setData((p) => (p.length === 0 ? p : [...p.slice(1), gen(p[p.length - 1])]));
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    const id = setInterval(tick, 150);
    return () => clearInterval(id);
  }, [tick, data.length]);

  if (data.length === 0) {
    return <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-10" preserveAspectRatio="none" />;
  }

  const path = buildPath(data);
  const areaPath = `${path} L ${W} ${H} L 0 ${H} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#sg-${color.replace("#", "")})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
