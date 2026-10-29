import * as React from "react";

const testimonials = [
  {
    name: "Aman K.",
    role: "Esports Community Admin",
    initials: "AK",
    color: "bg-red-100 text-[#b90b30]",
    content:
      "Calculating points manually between matches used to take 15 minutes. Now we enter scores and get the updated points table right away.",
  },
  {
    name: "Rahul S.",
    role: "Daily Scrims Organizer",
    initials: "RS",
    color: "bg-blue-100 text-blue-700",
    content:
      "The Excel import saves so much time when setting up 20+ teams for daily matches. No manual typing needed.",
  },
  {
    name: "Tanmay D.",
    role: "Tournament Operations Lead",
    initials: "TD",
    color: "bg-emerald-100 text-emerald-800",
    content:
      "Having tie-breakers and placement points calculated automatically eliminated all the scoring disputes we used to face.",
  },
  {
    name: "Mohit G.",
    role: "Gaming League Host",
    initials: "MG",
    color: "bg-purple-100 text-purple-700",
    content:
      "Downloading ready-to-share standings graphics directly after matches made our Discord announcements look clean and professional.",
  },
  {
    name: "Dev R.",
    role: "College Esports Coordinator",
    initials: "DR",
    color: "bg-amber-100 text-amber-800",
    content:
      "We run weekly multi-match events. Saving teams in the pool and reusing rosters across matches is effortless.",
  },
  {
    name: "Vikram N.",
    role: "Competitive Gaming Host",
    initials: "VN",
    color: "bg-sky-100 text-sky-800",
    content:
      "No complex spreadsheets or confusing setup. The audit logs and simple interface give us complete control during live events.",
  },
];

export default function Testimonials4() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full bg-white py-10 sm:py-16 md:py-24 px-4 sm:px-8"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="flex flex-col items-start space-y-3 sm:space-y-4 text-left">
            <span className="inline-block rounded-full bg-[#f3f4f6] px-3.5 py-1 text-[12px] font-medium text-[#555555] sm:px-4 sm:py-1.5 sm:text-[13px]">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="text-[26px] font-semibold leading-[1.16] tracking-[-0.025em] text-[#111111] sm:text-[38px] md:text-[48px]"
            >
              Trusted by teams who move fast
            </h2>
            <p className="max-w-md text-[14px] leading-[1.58] text-[#666666] sm:text-[16px] sm:leading-[1.6]">
              See how tournament hosts and esports communities use Esportific to
              manage teams, calculate match scores, and share points tables.
            </p>
          </div>

          {/* Right Column: Infinite Vertical Testimonials Ticker */}
          <div className="relative h-[350px] w-full rounded-[16px] overflow-hidden bg-white p-2.5 sm:h-[420px] sm:rounded-[20px] sm:p-6 lg:h-[500px]">
            {/* Top Fade Gradient */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-12 bg-gradient-to-b from-white via-white/80 to-transparent sm:h-20" />

            {/* Scrolling Ticker Track */}
            <div className="h-full w-full overflow-hidden">
              <div className="testimonial-track">
                {[0, 1].map((copyIndex) => (
                  <div
                    key={copyIndex}
                    aria-hidden={copyIndex === 1 ? "true" : undefined}
                    className="flex flex-col gap-3 pb-3 sm:gap-4 sm:pb-4"
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="flex-none w-full">
                        <blockquote className="rounded-[12px] bg-[#f8f9fa] p-4 border border-[#eaeaea] sm:rounded-[16px] sm:p-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                              <div
                                className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold text-[13px] sm:h-10 sm:w-10 sm:text-[14px] ${testimonial.color}`}
                              >
                                {testimonial.initials}
                              </div>
                              <div className="flex flex-col">
                                <cite className="not-italic text-[13.5px] font-semibold text-[#111111] sm:text-[14px]">
                                  {testimonial.name}
                                </cite>
                                <span className="text-[11.5px] text-[#666666] sm:text-[12px]">
                                  {testimonial.role}
                                </span>
                              </div>
                            </div>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4.5 w-4.5 text-[#e9103f] opacity-80 sm:h-5 sm:w-5"
                            >
                              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                            </svg>
                          </div>
                          <p className="mt-2.5 text-[12.5px] leading-[1.5] text-[#555555] sm:mt-3 sm:text-[13px] sm:leading-relaxed">
                            &ldquo;{testimonial.content}&rdquo;
                          </p>
                        </blockquote>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Fade Gradient */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-white via-white/80 to-transparent sm:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
