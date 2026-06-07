"use client";

import { useState } from "react";

interface AdCard {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
  imageAlt: string;
  accent: string;
}

const cards: AdCard[] = [
  {
    id: 1,
    tag: "REFERRAL",
    tagColor: "#16a34a",
    title: "Give $20, Get $20",
    description: "Refer a friend and you both get $20 off your next order.",
    ctaLabel: "REFER NOW",
    ctaHref: "#",
    imageUrl: "/feature/images/how_to_wash_towels.jpg",
    imageAlt: "Refer a friend",
    accent: "#16a34a",
  },
  {
    id: 2,
    tag: "LIMITED DEAL",
    tagColor: "#CC0000",
    title: "25% Off Menu Price",
    description: "Use code SAVE25 at checkout on any regular menu order today.",
    ctaLabel: "ORDER NOW",
    ctaHref: "#",
    imageUrl: "/feature/images/how_to_wash_towels.jpg",
    imageAlt: "25% off deal",
    accent: "#CC0000",
  },
  {
    id: 3,
    tag: "NEW",
    tagColor: "#0ea5e9",
    title: "Epic Stuffed Crust",
    description: "Try our new garlic-butter stuffed crust. Available for a limited time.",
    ctaLabel: "TRY IT",
    ctaHref: "#",
    imageUrl: "/feature/images/how_to_wash_towels.jpg",
    imageAlt: "Stuffed crust pizza",
    accent: "#0ea5e9",
  },
];

function AdCard({ card }: { card: AdCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex w-full overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300"
      style={{
        boxShadow: hovered
          ? `0 12px 32px -4px ${card.accent}33`
          : "0 2px 12px -2px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Left content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        {/* Tag */}
        <span
          className="inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white"
          style={{ backgroundColor: card.tagColor }}
        >
          {card.tag}
        </span>

        {/* Text */}
        <div className="mt-3 space-y-1">
          <p
            className="text-[17px] font-extrabold leading-tight text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {card.title}
          </p>
          <p className="text-[12px] leading-snug text-gray-500">
            {card.description}
          </p>
        </div>

        {/* CTA */}
        <a
          href={card.ctaHref}
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest transition-colors duration-150"
          style={{ color: card.accent, borderBottom: `2px solid ${card.accent}`, paddingBottom: "1px" }}
        >
          {card.ctaLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      {/* Right image */}
      <div className="relative w-[130px] flex-shrink-0 overflow-hidden">
        <img
          src={card.imageUrl}
          alt={card.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
        {/* Color overlay strip on left edge */}
        <div
          className="absolute inset-y-0 left-0 w-[3px]"
          style={{ backgroundColor: card.accent }}
        />
      </div>
    </div>
  );
}

export default function AdCardGrid() {
  return (
    <div className="flex flex-col gap-4 p-6">
      {cards.map((card) => (
        <AdCard key={card.id} card={card} />
      ))}
    </div>
  );
}