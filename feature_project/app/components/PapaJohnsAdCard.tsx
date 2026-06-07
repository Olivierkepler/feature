"use client";

interface PapaJohnsAdCardProps {
  discount?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function PapaJohnsAdCard({
  discount = "25% Off",
  description = "Regular Menu Price Order",
  ctaLabel = "SHOP NOW",
  ctaHref = "https://www.papajohns.com",
  imageUrl = "/pizza.jpg",
  imageAlt = "Papa Johns pizza",
}: PapaJohnsAdCardProps) {
  return (
    <div className="flex w-[320px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Left panel */}
      <div className="flex flex-1 flex-col p-4">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span
            className="text-[22px] font-black uppercase tracking-tight"
            style={{
              color: "#CC0000",
              fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
            }}
          >
            PAPA
          </span>
          <span
            className="text-[22px] font-black uppercase tracking-tight"
            style={{
              color: "#CC0000",
              fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
            }}
          >
            JOHN'S
          </span>
        </div>

        {/* Offer text */}
        <p className="mt-3 text-[15px] font-bold leading-snug text-gray-900">
          {discount} {description}
        </p>

        {/* CTA */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[13px] font-extrabold uppercase tracking-widest text-gray-900 underline underline-offset-2 decoration-2 hover:text-[#CC0000] transition-colors duration-150"
        >
          {ctaLabel}
        </a>
      </div>

      {/* Right image panel */}
      <div className="w-[140px] flex-shrink-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}