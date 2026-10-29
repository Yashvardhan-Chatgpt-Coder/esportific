"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = ["Features", "Blog", "Documentation", "Support"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white border-b transition-all duration-200 ${
        isScrolled || isMobileMenuOpen
          ? "border-[#ececec]/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[64px] sm:h-[74px] w-full max-w-[1240px] items-center px-4 sm:px-8">
        <Link className="flex items-center" href="/" aria-label="Esportific home">
          <Image
            src="/Brand/Logo.png"
            alt="Esportific logo"
            width={1153}
            height={267}
            sizes="(max-width: 639px) 132px, 146px"
            className="h-auto w-[132px] sm:w-[156px]"
          />
        </Link>

        <nav className="ml-8 hidden items-center gap-1 text-[15px] font-medium text-[#22242a] lg:flex xl:ml-10">
          {navItems.map((item) => (
            <Link
              key={item}
              className="flex items-center px-3.5 py-1.5 rounded-[8px] transition-colors hover:bg-[#f3f4f6] hover:text-[#111111]"
              href="/coming-soon"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <a
            className="flex h-[35px] items-center justify-center rounded-lg border border-[#d9d9d9] bg-white px-5 text-[15px] font-medium text-[#22242a] shadow-[0_1px_2px_rgba(20,20,20,0.03)]"
            href="https://app.esportific.rangrove.com/"
          >
            Log in
          </a>
          <a
            className="flex h-[35px] items-center justify-center rounded-lg bg-[#e9103f] px-5 text-[15px] font-semibold text-white shadow-[0_1px_2px_rgba(165,0,35,0.16)]"
            href="/APKs/Esportific.apk"
            download="Esportific.apk"
          >
            Download App
          </a>
        </div>

        {/* Mobile & Tablet Action Bar */}
        <div className="ml-auto flex items-center gap-2.5 lg:hidden">
          <a
            className="flex h-[34px] items-center justify-center rounded-lg bg-[#e9103f] px-3.5 text-[13px] font-semibold text-white shadow-[0_1px_2px_rgba(165,0,35,0.16)] md:hidden"
            href="/APKs/Esportific.apk"
            download="Esportific.apk"
          >
            Download App
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#22242a] transition-colors hover:bg-[#f9f9f9] cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen ? (
        <div className="border-t border-[#ececec] bg-white px-4 pt-3 pb-5 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href="/coming-soon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 items-center justify-between px-3 rounded-[8px] text-[15px] font-medium text-[#22242a] transition-colors hover:bg-[#f3f4f6] hover:text-[#111111]"
              >
                <span>{item}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2.5 md:hidden">
            <a
              href="https://app.esportific.rangrove.com/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-10 items-center justify-center rounded-lg border border-[#d9d9d9] bg-white text-[14px] font-medium text-[#22242a]"
            >
              Log in
            </a>
            <a
              href="/APKs/Esportific.apk"
              download="Esportific.apk"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-10 items-center justify-center rounded-lg bg-[#e9103f] text-[14px] font-semibold text-white shadow-[0_1px_2px_rgba(165,0,35,0.16)]"
            >
              Download App
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
