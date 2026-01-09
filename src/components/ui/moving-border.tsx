"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 14000,
  className,
  ...props
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
}) {
  return (
    <Component
      className={cn(
        "group relative overflow-hidden bg-transparent p-px md:col-span-2",
        containerClassName
      )}
      style={{ borderRadius }}
      {...props}
    >
      {/* Animated Border */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              `
              h-20 w-20
              opacity-70
              transition-all duration-300 ease-out
              group-hover:scale-125
              group-hover:opacity-100

              bg-[radial-gradient(circle,
                rgba(59,130,246,0.55)_40%,
                transparent_60%
              )]

              dark:bg-[radial-gradient(circle,
                rgba(139,92,246,0.85)_40%,
                transparent_60%
              )]
              `,
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* Card Content */}
      <div
        className={cn(
          `
          relative flex h-full w-full items-center justify-center
          rounded-[inherit]
          border
          bg-white/90 dark:bg-slate-900/80
          border-neutral-200 dark:border-slate-800
          text-neutral-900 dark:text-white
          backdrop-blur-xl

          transition-all duration-300 ease-out
          group-hover:border-purple-500/50
          dark:group-hover:border-purple-400/50
          `,
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration,
  rx,
  ry,
}: {
  children: React.ReactNode;
  duration: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (!length) return;
    const pxPerMs = length / duration;
    progress.set((time * pxPerMs) % length);
  });

  const x = useTransform(progress, (v) =>
    pathRef.current?.getPointAtLength(v)?.x ?? 0
  );
  const y = useTransform(progress, (v) =>
    pathRef.current?.getPointAtLength(v)?.y ?? 0
  );

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          ref={pathRef}
          width="100%"
          height="100%"
          fill="none"
          rx={rx}
          ry={ry}
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
