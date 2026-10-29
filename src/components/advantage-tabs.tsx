"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const advantageTabs = [
  {
    id: "events",
    label: "Bulk Add Teams",
    heading: "Add Teams in Seconds",
    description:
      "Add multiple teams at once or import your full team list directly from an Excel sheet.",
    image: "/Home/3/Bulk Add.png",
  },
  {
    id: "teams",
    label: "Teams Pool",
    heading: "Manage All Your Teams",
    description:
      "Keep all your teams, player names, and slot numbers organized in one place.",
    image: "/Home/3/Teams Pool.png",
  },
  {
    id: "scoring",
    label: "Scoring Rules",
    heading: "Custom Point System",
    description:
      "Set placement points, kill points, and tie-breaker rules for your tournament.",
    image: "/Home/3/Scoring Rules.png",
  },
  {
    id: "results",
    label: "Match Results",
    heading: "Quick Match Result Entry",
    description:
      "Enter placement and kills for each match, and let the software calculate total points automatically.",
    image: "/Home/3/Match Results.png",
  },
  {
    id: "graphics",
    label: "Event Standings",
    heading: "Live Points Table & Standings",
    description:
      "View updated overall standings after every match and download ready-to-share points tables.",
    image: "/Home/3/Standings.png",
  },
];

export default function AdvantageTabs() {
  const [activeTabId, setActiveTabId] = useState("results");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const activeTab =
    advantageTabs.find((t) => t.id === activeTabId) || advantageTabs[3];
  const activeTabIndex = advantageTabs.findIndex((t) => t.id === activeTabId);

  return (
    <div
      ref={containerRef}
      className="mt-14 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] xl:grid-cols-[0.82fr_1.18fr] items-start"
    >
      {/* Left Column: Tab Menu */}
      <div className="relative flex flex-col divide-y divide-[#e5e5e5]">
        {/* Sliding Red Circle with White Arrow */}
        <div
          aria-hidden="true"
          className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#e9103f] text-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
          style={{
            transform: `translateY(${activeTabIndex * 68 + 18}px)`,
          }}
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        {advantageTabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              type="button"
              key={tab.id}
              aria-pressed={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className="group flex h-[68px] items-center justify-between py-5 text-left transition-colors duration-200 cursor-pointer"
            >
              {/* Width-shift-free bold layout wrapper */}
              <span className="inline-flex flex-col">
                <span
                  className={`text-[17px] sm:text-[18px] transition-all duration-200 ${
                    isActive
                      ? "font-bold text-[#111111]"
                      : "font-medium text-[#666666] hover:text-[#222222]"
                  }`}
                >
                  {tab.label}
                </span>
                {/* Hidden bold placeholder to reserve space and prevent width-shifting */}
                <span
                  className="invisible h-0 select-none overflow-hidden font-bold text-[17px] sm:text-[18px]"
                  aria-hidden="true"
                >
                  {tab.label}
                </span>
              </span>
              {/* Empty placeholder spacer on the right so text doesn't overlap the sliding circle */}
              <span className="w-8 h-8 flex-none" />
            </button>
          );
        })}
      </div>

      {/* Right Column: Hero Card & Sub-Cards */}
      <div className="flex flex-col gap-6">
        {/* Main Top Feature Card with Aspect Ratio matching 1917x1078 image resolution */}
        <div className="relative aspect-[1917/1078] w-full overflow-hidden rounded-[8px] bg-slate-900">
          {isVisible && (
            <>
              <Image
                src="/Home/Cards BG.jpg"
                alt="Feature showcase card background"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 95vw, 55vw"
                className="object-cover"
              />
              <Image
                src={activeTab.image}
                alt={`${activeTab.label} - ${activeTab.heading} feature interface`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 95vw, 55vw"
                className="object-contain transition-opacity duration-300"
              />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

          {/* Bottom-Left Overlay Text */}
          <div className="absolute bottom-5 left-5 z-10 max-w-[340px] text-white sm:bottom-6 sm:left-6 sm:max-w-[380px]">
            <h3 className="text-[18px] font-bold text-white sm:text-[22px]">
              {activeTab.heading}
            </h3>
            <p className="hidden sm:block mt-1.5 text-[12px] leading-[1.45] text-white/90 sm:text-[13px]">
              {activeTab.description}
            </p>
          </div>
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Card 1: Quick Excel Import */}
          <div className="flex flex-col justify-between rounded-[8px] bg-white p-5 sm:p-6 border border-[#ececec]">
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-bold text-[#111111] line-clamp-1 truncate">
                Quick Excel Import
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.45] text-[#666666] line-clamp-2 min-h-[38px]">
                Upload your Excel or CSV file to import teams and data in
                seconds without manual typing.
              </p>
            </div>

            <div className="relative mt-5 aspect-[1200/896] w-full overflow-hidden rounded-[8px] border border-[#f0f0f0] bg-[#f9fafb]">
              {isVisible && (
                <Image
                  src="/Home/excel-import.png"
                  alt="Quick Excel import modal interface preview"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-contain"
                />
              )}
            </div>
          </div>

          {/* Card 2: Activity & Audit Logs */}
          <div className="flex flex-col justify-between rounded-[8px] bg-white p-5 sm:p-6 border border-[#ececec]">
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-bold text-[#111111] line-clamp-1 truncate">
                Activity &amp; Audit Logs
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.45] text-[#666666] line-clamp-2 min-h-[38px]">
                See a clear history of every change made to teams, scores, and
                exports in your event.
              </p>
            </div>

            <div className="relative mt-5 aspect-[1200/896] w-full overflow-hidden rounded-[8px] border border-[#f0f0f0] bg-[#f9fafb]">
              {isVisible && (
                <Image
                  src="/Home/audit-logs.png"
                  alt="Activity and audit logs history interface preview"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
