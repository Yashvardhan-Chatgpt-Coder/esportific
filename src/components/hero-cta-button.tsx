"use client";

import { useState, useEffect } from "react";

export default function HeroCtaButton() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mobileCheck =
      /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;
    setIsMobile(mobileCheck);
  }, []);

  if (isMobile === false) {
    return (
      <a
        className="mt-6 flex h-[35px] items-center justify-center rounded-lg bg-[#e9103f] px-5 text-[14px] font-semibold text-white shadow-[0_1px_2px_rgba(165,0,35,0.16)] sm:mt-10 sm:text-[15px]"
        href="https://app.esportific.rangrove.com/"
      >
        Get Started Free
      </a>
    );
  }

  return (
    <a
      className="mt-6 flex h-[35px] items-center justify-center rounded-lg bg-[#e9103f] px-5 text-[14px] font-semibold text-white shadow-[0_1px_2px_rgba(165,0,35,0.16)] sm:mt-10 sm:text-[15px]"
      href="/APKs/Esportific.apk"
      download="Esportific.apk"
      onClick={(e) => {
        if (typeof window !== "undefined") {
          const isPc =
            !/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) && window.innerWidth >= 768;
          if (isPc) {
            e.preventDefault();
            window.location.href = "https://app.esportific.rangrove.com/";
          }
        }
      }}
    >
      Get Started Free
    </a>
  );
}
