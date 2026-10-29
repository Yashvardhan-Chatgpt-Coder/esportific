import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials4 from "@/components/testimonials-4";
import AdvantageTabs from "@/components/advantage-tabs";
import DesignBelts from "@/components/design-belts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCtaButton from "@/components/hero-cta-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1e2430]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="relative mx-auto flex min-h-0 w-full max-w-[2048px] flex-col items-center overflow-x-hidden px-4 pb-12 pt-8 text-center sm:px-8 sm:pb-16 sm:pt-14 lg:min-h-[calc(100vh-74px)] lg:pb-0 lg:pt-[76px]"
        >
          <div className="relative z-10 flex w-full flex-col items-center">
            <h1
              id="hero-heading"
              className="max-w-[356px] text-balance text-[27px] font-semibold leading-[1.16] tracking-[-0.03em] text-[#202532] sm:max-w-[1260px] sm:text-[36px] sm:leading-[1.18] sm:tracking-normal lg:text-[42px]"
            >
              All-In-One Esports Tournament Software
              <br className="hidden lg:block" />
              To Create &amp; Manage Your Events
            </h1>

            <p className="mt-3.5 max-w-[338px] text-balance text-[14px] font-normal leading-[1.58] text-[#666666] sm:mt-5 sm:max-w-[760px] sm:text-[16px] sm:leading-[1.55]">
              Esportific is a simple tournament software built for gaming
              organizers. Add teams, set your scoring rules, enter match
              results, and download points table graphics &mdash; all in one
              place.
            </p>

            <HeroCtaButton />

            <div className="mt-3.5 flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11.5px] font-medium text-[#666666] sm:mt-4 sm:gap-x-6 sm:gap-y-3 sm:text-[12px]">
              <span className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
                <CheckIcon />
                Free credits included
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
                <CheckIcon />
                No credit card needed
              </span>
            </div>
          </div>

          {/* Desktop Side Strips */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[120px] right-[calc(50%+532px)] z-0 hidden w-[max(0px,calc(50vw-532px))] lg:block"
          >
            <Image
              src="/Home/Hero/Left Bottom Strips.png"
              alt="Decorative background accent strips on the left"
              width={887}
              height={1774}
              loading="lazy"
              sizes="12vw"
              className="h-auto w-full"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[120px] left-[calc(50%+532px)] z-0 hidden w-[max(0px,calc(50vw-532px))] lg:block"
          >
            <Image
              src="/Home/Hero/Right Bottom Strips.png"
              alt="Decorative background accent strips on the right"
              width={887}
              height={1774}
              loading="lazy"
              sizes="12vw"
              className="h-auto w-full"
            />
          </div>

          {/* Hero Dashboard Showcase Stage */}
          <div className="relative z-10 mt-8 w-full max-w-[1100px] sm:mt-12 lg:mt-[48px]">
            {/* Mobile & Tablet Decorative Side Strips */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-5 bottom-[2%] -z-10 w-[48%] sm:-left-8 sm:bottom-[12%] sm:w-[64px] lg:hidden"
            >
              <Image
                src="/Home/Hero/Left Bottom Strips.png"
                alt="Decorative background accent strips on the left"
                width={887}
                height={1774}
                loading="lazy"
                fetchPriority="low"
                sizes="(max-width: 639px) 140px, 64px"
                className="h-auto w-full"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 bottom-[2%] -z-10 w-[48%] sm:-right-8 sm:bottom-[12%] sm:w-[64px] lg:hidden"
            >
              <Image
                src="/Home/Hero/Right Bottom Strips.png"
                alt="Decorative background accent strips on the right"
                width={887}
                height={1774}
                loading="lazy"
                fetchPriority="low"
                sizes="(max-width: 639px) 140px, 64px"
                className="h-auto w-full"
              />
            </div>

            {/* Mobile UI Showcase (Mobile View Only - Scaled Down, No Container) */}
            <div className="relative mx-auto w-[78%] max-w-[290px] sm:hidden">
              <Image
                src="/Home/Mobile.png"
                alt="Esportific mobile app tournament dashboard"
                width={790}
                height={1647}
                sizes="(max-width: 639px) 216px, 1px"
                priority
                fetchPriority="high"
                decoding="sync"
                className="block h-auto w-full"
              />
            </div>

            {/* Desktop / Tablet PC UI Frame */}
            <div className="hidden w-full overflow-hidden rounded-[24px] border border-[#ececec] bg-white sm:block">
              <Image
                src="/Home/Hero/Esportific Hero UI Screenshot.png"
                alt="Esportific event management and tournament software dashboard"
                width={1912}
                height={1047}
                sizes="(max-width: 639px) 1px, (max-width: 1200px) 95vw, 1100px"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-screen" />}>
          <BelowFoldSections />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

async function BelowFoldSections() {
  await new Promise((resolve) => setTimeout(resolve, 180));
  return (
    <>
      {/* Advantage Section */}
      <section
        id="features"
          aria-labelledby="features-heading"
          className="cv-auto w-full bg-white py-20 px-5 sm:px-8"
        >
          <div className="mx-auto w-full max-w-[1240px]">
            {/* Top Pill & Title Bar */}
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div>
                <h2
                  id="features-heading"
                  className="text-[32px] font-semibold leading-[1.15] text-[#111111] sm:text-[40px] md:text-[44px]"
                >
                  One Tournament Software to
                  <br className="hidden sm:inline" /> Manage Every Event
                </h2>
              </div>
              <p className="max-w-[380px] text-[15px] font-normal leading-[1.6] text-[#666666] md:pt-10">
                Manage your events, team pools, scoring rules, match results,
                and points tables from one simple dashboard.
              </p>
            </div>

            {/* Interactive Tabs & Feature Cards */}
            <AdvantageTabs />
          </div>
        </section>

        {/* Design Showcase */}
        <section
          id="designs"
          aria-labelledby="designs-heading"
          className="cv-auto design-showcase relative isolate mb-16 overflow-hidden bg-white px-4 py-8 sm:mb-24 sm:px-8 sm:py-12 lg:py-0"
        >
          <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 items-center gap-6 sm:gap-8 lg:min-h-[760px] lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)_minmax(0,1fr)] lg:gap-7 xl:gap-10">
            <div className="order-2 min-w-0 lg:order-1 lg:pr-6">
              <DesignBelts side="left" />
            </div>

            <div className="order-1 mx-auto flex w-full max-w-[340px] min-w-0 flex-col items-center pt-2 pb-1 text-center sm:max-w-[360px] sm:py-4 lg:order-2 lg:py-0">
              <h2
                id="designs-heading"
                className="text-balance text-[28px] font-semibold leading-[1.14] tracking-[-0.03em] text-[#111111] sm:text-[38px] lg:text-[42px] lg:leading-[1.12]"
              >
                Designs made to stand out.
              </h2>
              <p className="mt-3 max-w-[310px] text-balance text-[14px] leading-[1.6] text-[#666666] sm:mt-4 sm:max-w-[360px] sm:text-[15px] sm:leading-[1.7]">
                Ready-to-share standings and points table graphics designed for
                your tournaments.
              </p>
            </div>

            <div className="order-3 hidden min-w-0 lg:order-3 lg:block lg:pl-6">
              <DesignBelts side="right" />
            </div>
          </div>
        </section>

        {/* 3-Card Feature Section */}
        <section
          id="organizers"
          aria-labelledby="organizers-heading"
          className="cv-auto w-full bg-white px-4 pb-16 sm:px-8 sm:pb-24"
        >
          <div className="mx-auto w-full max-w-[1240px]">
            {/* Section Heading */}
            <div className="mx-auto mb-9 max-w-[720px] text-center sm:mb-14 md:mb-16">
              <h2
                id="organizers-heading"
                className="text-balance text-[26px] font-semibold leading-[1.16] tracking-[-0.025em] text-[#111111] sm:text-[40px] sm:leading-[1.15] sm:tracking-normal md:text-[44px]"
              >
                Simple Tournament Software Built for Organizers
              </h2>
              <p className="mx-auto mt-3 max-w-[345px] text-balance text-[14px] font-normal leading-[1.58] text-[#666666] sm:mt-4 sm:max-w-none sm:text-[16px] sm:leading-[1.6]">
                Everything you need to run your daily scrims and tournaments
                without messy spreadsheets.
              </p>
            </div>

            {/* 3 Cards Grid */}
            <div className="grid gap-4 sm:gap-5 md:grid-cols-3 md:gap-4">
              {/* Card 1: Quick Event Setup */}
              <div className="flex flex-col overflow-hidden rounded-[12px] border border-[#ececec] bg-white transition-transform duration-300 hover:-translate-y-1.5 md:rounded-[8px]">
                <div className="flex flex-grow flex-col p-5 sm:p-6">
                  <h3 className="mb-1.5 text-[18px] font-semibold leading-[1.25] text-[#111111] sm:mb-2 sm:text-[20px]">
                    Quick Event Setup
                  </h3>
                  <p className="text-[13.5px] leading-[1.55] text-[#666666] sm:text-[14px] sm:leading-[1.5]">
                    Create your tournament in seconds. Pick your game, choose
                    the format, and set your event dates.
                  </p>
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#f9fafb] sm:aspect-[16/9] md:aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Home/Cards BG.jpg"
                    alt="Quick Event Setup background"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="relative z-10 h-full w-full p-2 sm:p-2.5 md:p-3">
                    <div className="relative h-full w-full">
                      <Image
                        src="/Home/2/Create Event.png"
                        alt="Quick event setup interface preview"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain object-center drop-shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Automatic Points Table */}
              <div className="flex flex-col overflow-hidden rounded-[12px] border border-[#ececec] bg-white transition-transform duration-300 hover:-translate-y-1.5 md:rounded-[8px]">
                <div className="flex flex-grow flex-col p-5 sm:p-6">
                  <h3 className="mb-1.5 text-[18px] font-semibold leading-[1.25] text-[#111111] sm:mb-2 sm:text-[20px]">
                    Automatic Points Table
                  </h3>
                  <p className="text-[13.5px] leading-[1.55] text-[#666666] sm:text-[14px] sm:leading-[1.5]">
                    Standings update automatically as you enter match results.
                    Download your points table as an image or Excel file
                    anytime.
                  </p>
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#f9fafb] sm:aspect-[16/9] md:aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Home/Cards BG.jpg"
                    alt="Automatic Points Table background"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="relative z-10 h-full w-full p-2 sm:p-2.5 md:p-3">
                    <div className="relative h-full w-full">
                      <Image
                        src="/Home/2/Event Standings.png"
                        alt="Automatic points table and standings interface preview"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain object-center drop-shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Easy Team Management */}
              <div className="flex flex-col overflow-hidden rounded-[12px] border border-[#ececec] bg-white transition-transform duration-300 hover:-translate-y-1.5 md:rounded-[8px]">
                <div className="flex flex-grow flex-col p-5 sm:p-6">
                  <h3 className="mb-1.5 text-[18px] font-semibold leading-[1.25] text-[#111111] sm:mb-2 sm:text-[20px]">
                    Easy Team Management
                  </h3>
                  <p className="text-[13.5px] leading-[1.55] text-[#666666] sm:text-[14px] sm:leading-[1.5]">
                    Save teams in your pool, manage player rosters, and reuse
                    them across multiple events easily.
                  </p>
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#f9fafb] sm:aspect-[16/9] md:aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Home/Cards BG.jpg"
                    alt="Easy Team Management background"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="relative z-10 h-full w-full p-2 sm:p-2.5 md:p-3">
                    <div className="relative h-full w-full">
                      <Image
                        src="/Home/2/Teams Pool.png"
                        alt="Teams pool and player roster management interface preview"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain object-center drop-shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the App Section */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="cv-auto w-full bg-white px-4 pb-16 sm:px-8 sm:pb-24"
        >
          <div className="mx-auto w-full max-w-[1240px]">
            {/* Top Pill & Statement */}
            <div className="mx-auto mb-10 max-w-[880px] px-1 pt-2 text-center sm:mb-14 sm:px-0 sm:pt-0">
              <span className="mb-4 inline-block rounded-full bg-[#f3f4f6] px-3.5 py-1 text-[12px] font-medium tracking-[-0.01em] text-[#555555] sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[13px]">
                About Our Tournament Software
              </span>
              <h2
                id="about-heading"
                className="mx-auto max-w-[345px] text-[20px] font-semibold leading-[1.38] tracking-[-0.02em] text-[#111111] sm:max-w-none sm:text-[28px] sm:leading-[1.35] sm:tracking-normal md:text-[32px]"
              >
                <span className="block text-balance sm:inline">
                  We&apos;ve all been there &mdash; managing points on
                  spreadsheets, fixing calculation mistakes, and delaying
                  results.
                </span>{" "}
                <span className="mt-2.5 block text-balance sm:mt-0 sm:inline">
                  So we built the tournament software we wished existed: simple,
                  fast, and made for everyday organizers.
                </span>
              </h2>
            </div>

            {/* Big Card Container */}
            <div
              className="relative flex flex-col items-stretch justify-between overflow-hidden rounded-[16px] border border-[#ef3050] bg-[#ef3050] sm:rounded-[20px] md:min-h-[440px] md:flex-row"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ef3050 0%, #ef3050 100%)",
              }}
            >
              {/* Left Content Column */}
              <div className="z-10 flex w-full max-w-[540px] flex-col justify-between p-6 pb-2 sm:p-12 md:w-[52%] md:p-14">
                <div>
                  <h3 className="text-[23px] font-bold leading-[1.18] tracking-[-0.02em] text-white sm:text-[32px] sm:leading-[1.2] sm:tracking-normal">
                    Built to Keep Your Tournaments Focused
                    <br />
                    &amp; Aligned
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.55] text-white/95 sm:mt-3 sm:text-[15px] sm:leading-[1.5]">
                    Our tournament software saves you hours of manual work by
                    handling team lists, point calculations, and standings
                    graphics in one place.
                  </p>

                  <div className="mt-5 sm:mt-6">
                    <Link
                      href="/coming-soon"
                      aria-label="Learn more about Esportific tournament software"
                      className="inline-flex h-[38px] cursor-pointer items-center gap-2 rounded-full bg-white px-4.5 text-[13px] font-semibold text-[#c80d36] transition-all hover:bg-white/90 sm:h-auto sm:gap-2.5 sm:px-6 sm:py-3 sm:text-[14px]"
                    >
                      <span>
                        Learn More
                        <span className="sr-only">
                          {" "}
                          about Esportific tournament software
                        </span>
                      </span>
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#ef3050] text-white sm:h-5 sm:w-5">
                        <svg
                          aria-hidden="true"
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3.25 8h9.5M8.5 3.75 12.75 8 8.5 12.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Rating Block */}
                <div className="mt-7 flex items-center gap-3.5 border-t border-white/20 pt-5 sm:mt-12 sm:gap-4 sm:border-t-0 sm:pt-0">
                  <div className="text-[30px] font-bold leading-none text-white sm:text-[36px]">
                    4.9/5
                  </div>
                  <div className="flex flex-col gap-1">
                    <div
                      role="img"
                      className="flex items-center gap-0.5"
                      aria-label="Rated 4.9 out of 5 stars"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          aria-hidden="true"
                          className="flex h-4.5 w-4.5 items-center justify-center rounded-[2px] bg-white text-[10px] text-[#c80d36] sm:h-5 sm:w-5 sm:text-[11px]"
                        >
                          &#9733;
                        </div>
                      ))}
                    </div>
                    <div className="text-[11.5px] font-medium text-white/95 sm:text-[12px]">
                      Built for Esports Tournament Organizers
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px] md:absolute md:top-0 md:right-0 md:bottom-0 md:h-full md:w-[48%]">
                <Image
                  src="/Home/Built to Keep Your Team Focused & Aligned.png"
                  alt="Esportific tournament management dashboard preview"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom md:object-right-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Available On All Your Devices Section */}
        <section
          id="devices"
          aria-labelledby="devices-heading"
          className="cv-auto w-full bg-white px-4 pb-16 sm:px-8 sm:pb-24 lg:overflow-hidden lg:px-0"
        >
          <div className="mx-auto w-full max-w-[1536px] lg:pl-[calc((100vw-1240px)/2+32px)] lg:pr-0">
            {/* Main 2-Column Content */}
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column */}
              <div className="flex flex-col items-start lg:col-span-5">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f3f4f6] px-3.5 py-1 text-[12px] font-medium text-[#555555] sm:gap-2 sm:px-4 sm:py-1.5 sm:text-[13px]">
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#555555] sm:h-4 sm:w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Available on Web &amp; Mobile</span>
                </div>

                {/* Heading */}
                <h2
                  id="devices-heading"
                  className="mt-3.5 text-[28px] font-semibold leading-[1.14] tracking-[-0.025em] text-[#111111] sm:mt-5 sm:text-[42px] sm:leading-[1.12] sm:tracking-normal md:text-[46px]"
                >
                  Your Tournament Software On Any
                  <br />
                  Device.
                </h2>

                {/* Subtitle */}
                <p className="mt-3 max-w-[460px] text-[14px] leading-[1.55] text-[#666666] sm:mt-4 sm:text-[16px] sm:leading-[1.6]">
                  Create events, enter match results, and check standings from
                  your laptop or phone.
                </p>

                {/* Mobile / Tablet Mockup (Placed Right After Subheading on < lg) */}
                <div className="mt-5 flex w-full items-center justify-center overflow-hidden sm:mt-7 lg:hidden">
                  <div className="relative h-[225px] w-full overflow-hidden sm:h-[340px]">
                    <Image
                      src="/Home/Laptop & Mobile Mockup.png"
                      alt="Esportific tournament software displayed across laptop and mobile devices"
                      width={1300}
                      height={850}
                      loading="lazy"
                      sizes="(max-width: 1023px) 95vw, 1px"
                      className="h-full w-full translate-x-[6.5%] -translate-y-[2%] scale-[1.42] object-contain"
                    />
                  </div>
                </div>

                {/* Desktop & Mobile App Rows */}
                <div className="mt-5 flex w-full flex-col gap-4 sm:mt-8 sm:gap-6">
                  {/* Desktop App Row */}
                  <div className="flex flex-col justify-between gap-3.5 rounded-[14px] border border-[#ececec] bg-[#fafafa] p-4 sm:flex-row sm:items-center sm:gap-4 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:border-[#f0f0f0] sm:bg-transparent sm:p-0 sm:pb-6">
                    <div className="flex items-start gap-3 sm:items-center sm:gap-3.5">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-[#ececec] sm:h-12 sm:w-12 sm:rounded-[12px] sm:bg-[#f3f4f6] sm:shadow-none sm:ring-0">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-[#111] sm:h-6 sm:w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[14.5px] font-bold text-[#111111] sm:text-[15px]">
                          Web Tournament Software
                        </h3>
                        <p className="mt-0.5 text-[12.5px] leading-[1.45] text-[#666666] sm:text-[13px]">
                          Manage events, import Excel sheets, enter scores, and
                          download standings graphics from your browser.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-none flex-col items-center">
                      <a
                        href="https://app.esportific.rangrove.com/"
                        className="inline-flex h-[38px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#ef3050] px-4 text-[13px] font-semibold text-white transition-all hover:bg-[#d82442] sm:h-auto sm:w-auto sm:px-4.5 sm:py-2.5"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, #ef3050 0%, #ef3050 100%)",
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        <span>Open Web App</span>
                      </a>
                      <span className="mt-1.5 text-[11px] text-[#666666] sm:mt-1">
                        No installation required
                      </span>
                    </div>
                  </div>

                  {/* Mobile App Row */}
                  <div className="flex flex-col justify-between gap-3.5 rounded-[14px] border border-[#ececec] bg-[#fafafa] p-4 sm:flex-row sm:items-center sm:gap-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                    <div className="flex items-start gap-3 sm:items-center sm:gap-3.5">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-[#ececec] sm:h-12 sm:w-12 sm:rounded-[12px] sm:bg-[#f3f4f6] sm:shadow-none sm:ring-0">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-[#111] sm:h-6 sm:w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="5"
                            y="2"
                            width="14"
                            height="20"
                            rx="2"
                            ry="2"
                          />
                          <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[14.5px] font-bold text-[#111111] sm:text-[15px]">
                          Mobile Tournament App
                        </h3>
                        <p className="mt-0.5 text-[12.5px] leading-[1.45] text-[#666666] sm:text-[13px]">
                          Update match scores, check team lists, and share
                          points tables straight from your phone.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-none flex-col items-center">
                      <a
                        href="/APKs/Esportific.apk"
                        download="Esportific.apk"
                        className="inline-flex h-[38px] w-full items-center justify-center gap-2 rounded-[8px] border border-[#e2e2e2] bg-white px-4 text-[13px] font-semibold text-[#111111] transition-all hover:bg-[#f9f9f9] sm:h-auto sm:w-auto sm:px-4.5 sm:py-2.5"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-[#111]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>Download for Android</span>
                      </a>
                      <span className="mt-1.5 text-[11px] text-[#666666] sm:mt-1">
                        For Android 8.0 and above
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Laptop & Mobile Image Mockup (Desktop Only, Bleeding Right) */}
              <div className="hidden w-full items-center justify-end overflow-hidden lg:col-span-7 lg:flex">
                <div className="relative -mr-4 w-[112%] min-w-[720px] xl:-mr-8 xl:min-w-[800px]">
                  <Image
                    src="/Home/Laptop & Mobile Mockup.png"
                    alt="Esportific tournament software displayed across laptop and mobile devices"
                    width={1300}
                    height={850}
                    loading="lazy"
                    sizes="(max-width: 1023px) 1px, 750px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Centered Bottom Feature Bar Container */}
          <div className="mx-auto mt-6 w-full max-w-[1240px] px-4 sm:mt-10 sm:px-8">
            <div className="mx-auto w-full max-w-[1000px]">
              {/* Bottom Feature Bar */}
              <div
                className="rounded-[14px] border border-[#ececec] bg-[#f6f6f6] p-4 sm:rounded-none sm:border-x-0 sm:border-y sm:bg-transparent sm:px-0 sm:py-4"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #f6f6f6 1.5%, #f6f6f6 98.5%, transparent 100%)",
                }}
              >
                {/* Compact Inner Contents Wrapper */}
                <div className="mx-auto max-w-[940px] sm:px-4">
                  <div className="grid grid-cols-2 gap-x-3.5 gap-y-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#e5e5e5]">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3 lg:justify-center lg:pr-4">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[7px] bg-[#ef3050] text-white sm:h-9 sm:w-9 sm:rounded-[8px]">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 sm:h-4.5 sm:w-4.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold leading-[1.2] text-[#111111] sm:text-[13.5px]">
                          Safe &amp; Reliable
                        </h4>
                        <p className="mt-0.5 text-[11px] leading-[1.35] text-[#666666] sm:text-[11.5px] sm:leading-[1.3]">
                          Your event data is saved and backed up.
                        </p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3 lg:justify-center lg:px-4">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[7px] bg-[#ef3050] text-white sm:h-9 sm:w-9 sm:rounded-[8px]">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 sm:h-4.5 sm:w-4.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 18a3.5 3.5 0 0 0 0-7h-1A8 8 0 1 0 3 13a4 4 0 0 0 2 7" />
                          <polyline points="12 13 12 21" />
                          <polyline points="9 16 12 13 15 16" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold leading-[1.2] text-[#111111] sm:text-[13.5px]">
                          Instant Updates
                        </h4>
                        <p className="mt-0.5 text-[11px] leading-[1.35] text-[#666666] sm:text-[11.5px] sm:leading-[1.3]">
                          Standings update right after every match.
                        </p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-start gap-2 border-t border-[#e9e9e9] pt-3.5 sm:flex-row sm:items-center sm:gap-3 sm:border-t-0 sm:pt-0 lg:justify-center lg:px-4">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[7px] bg-[#ef3050] text-white sm:h-9 sm:w-9 sm:rounded-[8px]">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 sm:h-4.5 sm:w-4.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold leading-[1.2] text-[#111111] sm:text-[13.5px]">
                          Fast &amp; Simple
                        </h4>
                        <p className="mt-0.5 text-[11px] leading-[1.35] text-[#666666] sm:text-[11.5px] sm:leading-[1.3]">
                          No complex setup or learning curve.
                        </p>
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col items-start gap-2 border-t border-[#e9e9e9] pt-3.5 sm:flex-row sm:items-center sm:gap-3 sm:border-t-0 sm:pt-0 lg:justify-center lg:pl-4">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-[7px] bg-[#ef3050] text-white sm:h-9 sm:w-9 sm:rounded-[8px]">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 sm:h-4.5 sm:w-4.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold leading-[1.2] text-[#111111] sm:text-[13.5px]">
                          Team Access
                        </h4>
                        <p className="mt-0.5 text-[11px] leading-[1.35] text-[#666666] sm:text-[11.5px] sm:leading-[1.3]">
                          Work together with your admin team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials4 />
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[14px] w-[14px] flex-none"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="9" cy="9" r="7.6" stroke="#666666" strokeWidth="1.6" />
      <path
        d="M5.7 9.2l2.1 2 4.5-4.7"
        stroke="#666666"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
