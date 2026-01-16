"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export type NavItem = {
  label: string;
  href: string;
};

interface PillNavProps {
  logo: string;
  items: NavItem[];
  activeHref?: string;
  baseColor?: string;
  pillColor?: string;
  pillTextColor?: string;
  hoveredPillTextColor?: string;
  ease?: string;
  className?: string;
}

export default function PillNav({
  logo,
  items,
  activeHref,
  baseColor = "#000",
  pillColor = "#fff",
  pillTextColor = "#000",
  hoveredPillTextColor = "#fff",
  ease = "power3.out",
  className = "",
}: PillNavProps) {
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);

  /* ---------- GSAP LAYOUT FIX ---------- */
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle || !circle.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const { width: w, height: h } = pill.getBoundingClientRect();

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(
          R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))
        );

        gsap.set(circle, {
          width: D,
          height: D,
          bottom: -delta,
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${D - delta}px`,
          willChange: "transform",
          transform: "translateZ(0)",
        });

        const label = pill.querySelector(".pill-label");
        const hover = pill.querySelector(".pill-label-hover");

        gsap.set(label, { y: 0 });
        gsap.set(hover, { y: h + 12, opacity: 0 });

        tlRefs.current[i]?.kill();

        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.15, duration: 0.6, ease }, 0)
          .to(label, { y: -(h + 8), duration: 0.6, ease }, 0)
          .to(hover, { y: 0, opacity: 1, duration: 0.6, ease }, 0);

        tlRefs.current[i] = tl;
      });
    };

    // 🔑 Critical for Next.js smoothness
    requestAnimationFrame(() =>
      requestAnimationFrame(() => layout())
    );

    document.fonts?.ready.then(() => {
      setTimeout(layout, 50);
    });

    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [items, ease]);

  return (
    <nav
      className={`relative flex items-center rounded-full px-2 ${className}`}
      style={{
        background: baseColor,
        height: 42,
        contain: "layout paint style",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-black overflow-hidden"
      >
        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
      </Link>

      {/* Pills */}
      <ul className="flex items-stretch ml-2 p-[3px] gap-[3px] h-full">
        {items.map((item, i) => {
          const isActive = activeHref === item.href;

          return (
            <li key={item.href} className="relative h-full">
              <Link
                href={item.href}
                onMouseEnter={() => tlRefs.current[i]?.play()}
                onMouseLeave={() => tlRefs.current[i]?.reverse()}
                className="relative flex items-center justify-center h-full px-[18px] rounded-full font-semibold uppercase text-[14px] overflow-hidden"
                style={{
                  background: pillColor,
                  color: pillTextColor,
                }}
              >
                {/* Hover circle */}
                <span
  ref={(el) => {
    circleRefs.current[i] = el;
  }}
  className="absolute left-1/2 bottom-0 rounded-full z-0"
  style={{ background: baseColor }}
/>

                {/* Labels */}
                <span className="relative z-10 inline-block">
                  <span className="pill-label block">
                    {item.label}
                  </span>
                  <span
                    className="pill-label-hover absolute left-0 top-0"
                    style={{ color: hoveredPillTextColor }}
                  >
                    {item.label}
                  </span>
                </span>

                {/* Active dot */}
                {isActive && (
                  <span
                    className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
                    style={{ background: baseColor }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
