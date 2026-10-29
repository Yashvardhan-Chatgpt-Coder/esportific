"use client";

import { useEffect, useRef, useState } from "react";

const designImages = [
  "Autumn Theme.png",
  "Christmas Theme.png",
  "Free Fire Theme.png",
  "General 1.png",
  "General 2.png",
  "General 3.png",
  "General 4.png",
  "General 5.png",
  "General 6.png",
  "General 7.png",
  "Monsoon Theme.png",
  "Sakura Theme.png",
  "Summer Theme.png",
  "Top Shooters 1.png",
  "Top Shooters 2.png",
  "Top Shooters 3.png",
  "Vintage Theme.png",
  "Winter Theme.png",
];

export default function DesignBelts({ side }: { side: "left" | "right" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid min-w-0 grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4 xl:gap-5"
    >
      {[0, 1, 2].map((beltIndex) => {
        const direction =
          beltIndex === 1 ? "design-belt-down" : "design-belt-up";

        return (
          <div
            className="design-belt h-[420px] sm:h-[520px] lg:h-[720px]"
            key={beltIndex}
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-12 bg-gradient-to-b from-white via-white/80 to-transparent sm:h-16" />
            {isVisible ? (
              <div
                className={`design-belt-track ${direction}`}
                style={{ animationDelay: `${beltIndex * -3}s` }}
              >
                {[0, 1].map((copy) => (
                  <div
                    className="flex flex-col gap-2.5 pb-2.5 sm:gap-3.5 sm:pb-3.5 lg:gap-4 lg:pb-4"
                    key={copy}
                  >
                    {Array.from({ length: 5 }, (_, frameIndex) => {
                      const imageIndex =
                        (beltIndex * 5 +
                          frameIndex +
                          (side === "right" ? 3 : 0)) %
                        designImages.length;
                      const image = designImages[imageIndex];
                      const encodedUrl = encodeURIComponent(
                        `/Home/Designs/${image}`
                      );

                      return (
                        <div
                          className="design-placeholder relative aspect-[4/5]"
                          key={`${copy}-${frameIndex}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/_next/image?url=${encodedUrl}&w=256&q=75`}
                            alt={`Tournament standings points table graphic design template ${imageIndex + 1}`}
                            width={200}
                            height={250}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : null}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-white via-white/80 to-transparent sm:h-16" />
          </div>
        );
      })}
    </div>
  );
}
