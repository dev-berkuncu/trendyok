"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const POINTS = 40;
const WIDTH = 600;
const HEIGHT = 280;
const PADDING_TOP = 40;
const PADDING_BOTTOM = 40;
const UPDATE_INTERVAL = 80;

function generateSmooth(prev: number): number {
  const delta = (Math.random() - 0.48) * 12;
  const next = prev + delta;
  return Math.max(15, Math.min(85, next));
}

function buildPath(data: number[]): string {
  const stepX = WIDTH / (POINTS - 1);
  const scaleY = (v: number) =>
    PADDING_TOP + ((100 - v) / 100) * (HEIGHT - PADDING_TOP - PADDING_BOTTOM);

  let d = `M 0 ${scaleY(data[0])}`;
  for (let i = 1; i < data.length; i++) {
    const x = i * stepX;
    const y = scaleY(data[i]);
    const prevX = (i - 1) * stepX;
    const prevY = scaleY(data[i - 1]);
    const cpx1 = prevX + stepX * 0.4;
    const cpx2 = x - stepX * 0.4;
    d += ` C ${cpx1} ${prevY}, ${cpx2} ${y}, ${x} ${y}`;
  }
  return d;
}

function buildArea(data: number[]): string {
  const linePath = buildPath(data);
  return `${linePath} L ${WIDTH} ${HEIGHT} L 0 ${HEIGHT} Z`;
}

const gridLines = [20, 40, 60, 80];

export default function LiveChart() {
  const [data, setData] = useState<number[]>(() => {
    const arr: number[] = [50];
    for (let i = 1; i < POINTS; i++) arr.push(generateSmooth(arr[i - 1]));
    return arr;
  });

  const latestRef = useRef(data);
  latestRef.current = data;

  const tick = useCallback(() => {
    setData((prev) => {
      const next = [...prev.slice(1), generateSmooth(prev[prev.length - 1])];
      return next;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(tick, UPDATE_INTERVAL);
    return () => clearInterval(id);
  }, [tick]);

  const linePath = buildPath(data);
  const areaPath = buildArea(data);
  const current = data[data.length - 1];
  const prev = data[data.length - 2];
  const isUp = current >= prev;
  const stepX = WIDTH / (POINTS - 1);
  const lastX = (POINTS - 1) * stepX;
  const lastY =
    PADDING_TOP +
    ((100 - current) / 100) * (HEIGHT - PADDING_TOP - PADDING_BOTTOM);

  return (
    <div className="w-full relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#B8C7A3]/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#8FA87A] text-lg">
              trending_up
            </span>
          </div>
          <div>
            <div className="font-body text-xs text-[#8C857E] tracking-wide">
              CANLI GELİR ANALİZİ
            </div>
            <div className="font-display text-lg font-semibold text-[#2D2A26]">
              ₺{(current * 280 + 14000).toLocaleString("tr-TR")}
            </div>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-body ${
            isUp
              ? "bg-[#B8C7A3]/15 text-[#8FA87A]"
              : "bg-[#F7C8D0]/20 text-[#D4544A]"
          }`}
        >
          <span className="material-symbols-outlined text-sm">
            {isUp ? "arrow_upward" : "arrow_downward"}
          </span>
          {Math.abs(current - prev).toFixed(1)}%
        </div>
      </div>

      {/* Chart */}
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8FA87A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8FA87A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B8C7A3" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8FA87A" />
            <stop offset="100%" stopColor="#B8C7A3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid */}
        {gridLines.map((v) => {
          const y =
            PADDING_TOP +
            ((100 - v) / 100) * (HEIGHT - PADDING_TOP - PADDING_BOTTOM);
          return (
            <g key={v}>
              <line
                x1={0}
                y1={y}
                x2={WIDTH}
                y2={y}
                stroke="rgba(180,170,155,0.15)"
                strokeDasharray="4 4"
              />
              <text
                x={WIDTH - 4}
                y={y - 4}
                fill="rgba(140,133,126,0.35)"
                fontSize="9"
                textAnchor="end"
                fontFamily="var(--font-body)"
              >
                {v}%
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path
          d={areaPath}
          fill="url(#areaGrad)"
          className="transition-all duration-100"
        />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          className="transition-all duration-100"
        />

        {/* Pulse dot */}
        <circle cx={lastX} cy={lastY} r="6" fill="#8FA87A" opacity="0.3">
          <animate
            attributeName="r"
            values="6;12;6"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={lastX} cy={lastY} r="4" fill="#8FA87A" />
        <circle cx={lastX} cy={lastY} r="2" fill="#FFF4E6" />
      </svg>

      {/* Bottom metrics */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[
          { label: "Günlük", value: "₺84.2K", change: "+5.2%" },
          { label: "Haftalık", value: "₺412K", change: "+12.8%" },
          { label: "Aylık", value: "₺2.4M", change: "+14.2%" },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-[#2D2A26]/[0.03] rounded-lg p-3 border border-[#D4C4B0]/30"
          >
            <div className="font-body text-[10px] text-[#8C857E] tracking-wide uppercase">
              {m.label}
            </div>
            <div className="font-body text-sm font-semibold text-[#2D2A26]">
              {m.value}
            </div>
            <div className="font-body text-[10px] text-[#8FA87A]">
              {m.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
