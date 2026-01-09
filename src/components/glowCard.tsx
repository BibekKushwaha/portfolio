"use client";

import { useRef, ReactNode, MouseEvent } from "react";

/* ---------- Types ---------- */

type CardData = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

type GlowCardProps = {
  card: CardData;
  index: number;
  children?: ReactNode;
};

/* ---------- Component ---------- */

const GlowCard = ({ card, index, children }: GlowCardProps) => {
  // refs for all the cards
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove =
    (index: number) => (e: MouseEvent<HTMLDivElement>) => {
      // get the current card
      const el = cardRefs.current[index];
      if (!el) return;

      // get the mouse position relative to the card
      const rect = el.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      // calculate the angle from the center of the card to the mouse
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      // adjust the angle so that it's between 0 and 360
      angle = (angle + 360) % 360;

      // set the angle as a CSS variable
      el.style.setProperty("--start", `${angle + 60}`);
    };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="
        card card-border relative rounded-xl p-10 mb-5
        transition-transform hover:scale-[1.02] shadow-2xl
      "
    >
      {/* Glow layer */}
      <div className="glow" />

      {/* Rating */}
      <div className="flex items-center gap-1 mb-5 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <img
            key={i}
            src="/images/star.png"
            alt="star"
            className="size-5"
          />
        ))}
      </div>

      {/* Review */}
      <p
        className="
          relative z-10 text-lg leading-relaxed
          text-gray-700 dark:text-gray-300 mb-6
        "
      >
        {card.review}
      </p>

      {children}
    </div>
  );
};

export default GlowCard;
