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
    description: "Refer a friend to Saskia Cleaning and you both get $20 off your next booking.",
    ctaLabel: "REFER NOW",
    ctaHref: "https://saskiaservices.com/#quote",
    imageUrl: "/feature/images/friend_sharing.jpg",
    imageAlt: "Refer a friend to Saskia Cleaning",
    accent: "#16a34a",
  },
  {
    id: 2,
    tag: "LIMITED DEAL",
    tagColor: "#CC0000",
    title: "$20 Off Deep Clean",
    description: "Book a deep clean this week and save $20. Serving Massachusetts & Rhode Island.",
    ctaLabel: "BOOK NOW",
    ctaHref: "https://saskiaservices.com/#quote",
    imageUrl: "/feature/images/limited_deal.jpg",
    imageAlt: "Professional deep cleaning service",
    accent: "#CC0000",
  },
  {
    id: 3,
    tag: "NEW SERVICE",
    tagColor: "#0ea5e9",
    title: "Airbnb Turnover",
    description: "Fast, guest-ready turnovers for your short-term rental. Starting at $120.",
    ctaLabel: "LEARN MORE",
    ctaHref: "https://saskiaservices.com/#services",
    imageUrl: "/feature/images/towel-folder.jpg",
    imageAlt: "Airbnb turnover cleaning service",
    accent: "#0ea5e9",
  },
];

function AdCard({ card }: { card: AdCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex w-full overflow-hidden rounded-2xl bg-white transition-all duration-300"
      style={{
        boxShadow: hovered
          ? `4px 10px 28px -2px ${card.accent}44`
          : "3px 6px 16px -2px rgba(0,0,0,0.12)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Left content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        {/* Tag */}
    {/* Tag */}
<div className="w-fit leading-none">
  <span
    className="block text-[13px] font-black uppercase"
    style={{
      color: card.tagColor,
      fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
      letterSpacing: "-0.01em",
      lineHeight: "1.1",
    }}
  >
    {card.tag.split(" ")[0]}
  </span>
  {card.tag.split(" ")[1] && (
    <span
      className="block text-[13px] font-black uppercase"
      style={{
        color: card.tagColor,
        fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
        letterSpacing: "-0.01em",
        lineHeight: "1.1",
      }}
    >
      {card.tag.split(" ").slice(1).join(" ")}
    </span>
  )}
</div>

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
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest transition-colors duration-150"
          style={{
            color: card.accent,
            borderBottom: `2px solid ${card.accent}`,
            paddingBottom: "1px",
          }}
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
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-2xl"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
      </div>
    </div>
  );
}

export default function AdCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-7xl mx-auto w-full">
      {cards.map((card) => (
        <AdCard key={card.id} card={card} />
      ))}
    </div>
  );
}