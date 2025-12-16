"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import type React from "react";
import { useRef } from "react";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = containerRef.current?.querySelectorAll(".split-char");
      if (chars && chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 20,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: delay / 1000,
            duration: duration,
            ease: "back.out(1.7)",
            transformOrigin: "50% 50% -20px",
          },
        );
      }
    },
    { scope: containerRef, dependencies: [text, delay, duration] },
  );

  return (
    <div
      ref={containerRef}
      className={`inline-block overflow-hidden ${className}`}
    >
      {text.split("").map((char, index) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="split-char inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
