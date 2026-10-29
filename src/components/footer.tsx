import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Event Management", href: "/coming-soon" },
      { label: "Points & Standings", href: "/coming-soon" },
      { label: "Standings Graphics", href: "/coming-soon" },
      { label: "Teams Pool", href: "/coming-soon" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/coming-soon" },
      { label: "Blog", href: "/coming-soon" },
      { label: "Help Center", href: "/coming-soon" },
      { label: "Discord Community", href: "/coming-soon" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/coming-soon" },
      { label: "Careers", href: "/coming-soon" },
      { label: "Contact", href: "/coming-soon" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="cv-auto w-full bg-[#ef3050] text-white"
      style={{
        backgroundImage: "linear-gradient(180deg, #ef3050 0%, #ef3050 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 pt-16 pb-12 sm:px-8 md:pt-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Brand, Description & Socials */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-6">
            <Link href="/" aria-label="Esportific home" className="inline-block">
              <Image
                src="/Brand/Logo.png"
                alt="Esportific logo"
                width={1153}
                height={267}
                loading="lazy"
                sizes="140px"
                className="h-auto w-[148px] brightness-0 invert"
              />
            </Link>

            <p className="mt-4 max-w-[320px] text-[14px] leading-[1.6] text-white/95">
              Create and manage esports tournaments from one simple dashboard.
              Built for gaming organizers to manage teams, calculate points, and
              share standings.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {/* X / Twitter */}
              <Link
                href="/coming-soon"
                aria-label="Esportific on X"
                className="text-white/80 transition-colors hover:text-white"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              {/* Discord */}
              <Link
                href="/coming-soon"
                aria-label="Esportific on Discord"
                className="text-white/80 transition-colors hover:text-white"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="/coming-soon"
                aria-label="Esportific on YouTube"
                className="text-white/80 transition-colors hover:text-white"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="/coming-soon"
                aria-label="Esportific on Instagram"
                className="text-white/80 transition-colors hover:text-white"
              >
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col">
                <h3 className="text-[14px] font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 text-[14px] text-white/80 transition-colors hover:text-white hover:underline"
                      >
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-white/70">
            <span>&copy; {new Date().getFullYear()} Esportific. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] text-white/80">
            <Link href="/privacy" className="transition-colors hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
