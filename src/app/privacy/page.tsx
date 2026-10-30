import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Esportific Privacy Policy to learn what information our esports tournament software collects, how it is used, and how your event and player data is protected.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Esportific – Privacy Policy",
    description:
      "Read the Esportific Privacy Policy to learn what information our esports tournament software collects and how your tournament data is protected.",
    url: "https://esportific.rangrove.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111214]">
      <Header />

      <main className="flex-1 w-full max-w-[860px] mx-auto px-5 py-10 sm:py-14">
        <header className="border-b border-[#e5e7eb] pb-6 mb-8">
          <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.03em] leading-[1.15] text-[#111214]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#666b73] max-w-[680px]">
            This policy explains what information Esportific collects, how it is used, and the choices available to you.
          </p>
          <p className="mt-3 text-[12px] font-medium text-[#666b73]">
            Last updated: 15 October 2026
          </p>
        </header>

        <article className="space-y-8 text-[14px] leading-[1.7] text-[#373b42]">
          <section id="who-we-are" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              About Esportific
            </h2>
            <p className="my-2">
              Esportific is an esports tournament management service based in India. “We” means the operator of Esportific; “you” means anyone who visits or uses it.
            </p>
            <p className="my-2">
              We handle personal information under applicable data-protection laws.
            </p>
          </section>

          <section id="information" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Information we collect
            </h2>
            <p className="my-2">
              Information depends on the features you use and what you enter.
            </p>
            <ul className="my-3 space-y-2 list-disc pl-5 text-[#373b42]">
              <li>
                <strong className="text-[#111214] font-bold">Account:</strong> name, email, password hash, and session identifiers. Registration email codes expire after five minutes.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Profile:</strong> optional phone number, photo, date of birth, gender, time zone, organization name and logo, preferences, and integration details.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Tournaments:</strong> event details, teams, rosters, player names and in-game IDs, contact numbers, schedules, scoring rules, results, and notes.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Support:</strong> your name, email, subject, and message.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Security and diagnostics:</strong> sign-in and activity records, record changes, IP address, browser and device details, approximate location when available, and technical error information.
              </li>
            </ul>
            <p className="my-2">
              Do not enter sensitive information into notes or player fields unless it is necessary and you are authorized to provide it.
            </p>
            <h3 className="text-[14px] font-bold text-[#111214] mt-5 mb-1.5">
              Browser storage
            </h3>
            <p className="my-2">
              The web app uses local storage to keep you signed in and remember settings. Clearing it may sign you out. It is not used for third-party advertising.
            </p>
          </section>

          <section id="uses" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              How we use information
            </h2>
            <p className="my-2">We use information to:</p>
            <ul className="my-3 space-y-2 list-disc pl-5 text-[#373b42]">
              <li>create and secure accounts, verify email, and manage sign-in sessions;</li>
              <li>provide tournament, team, roster, scoring, results, standings, and export features;</li>
              <li>store profile details and preferences you choose;</li>
              <li>send verification and service messages and answer support requests;</li>
              <li>prevent misuse, investigate security issues, and protect the service;</li>
              <li>fix issues and improve Esportific; and</li>
              <li>meet legal requirements.</li>
            </ul>
            <p className="my-2">
              <strong className="text-[#111214] font-bold">Product improvement:</strong> We may use service activity and aggregated or de-identified information to fix problems and improve Esportific. We do not use identifiable player contact details or private roster data for unrelated advertising.
            </p>
            <p className="my-2">
              We process information with your consent where required, to provide the features you request, or on another basis allowed by law. You can withdraw consent where applicable.
            </p>
          </section>

          <section id="sharing" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              When information is shared
            </h2>
            <p className="my-2">
              We do not sell personal information. We share it only when needed:
            </p>
            <ul className="my-3 space-y-2 list-disc pl-5 text-[#373b42]">
              <li>
                <strong className="text-[#111214] font-bold">Service providers:</strong> MongoDB for database services, Resend for email, and Cloudinary for uploaded images.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Authorized users:</strong> people you allow to access your events and teams.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Recipients you choose:</strong> when you export or share event information, it may be seen by the recipients you select.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Legal and safety reasons:</strong> to meet legal obligations or protect users, rights, and the service.
              </li>
              <li>
                <strong className="text-[#111214] font-bold">Business transfer:</strong> if Esportific is transferred or reorganized, information may move with the service under applicable law.
              </li>
            </ul>
          </section>

          <section id="storage" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Storage and security
            </h2>
            <p className="my-2">
              We use safeguards designed to protect information from unauthorized access, loss, or misuse. Passwords are stored as one-way hashes. No online service is completely secure.
            </p>
            <p className="my-2">
              Information is stored in our database and with the providers listed above. Storage locations depend on the provider and deployment configuration.
            </p>
          </section>

          <section id="retention" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Retention and deletion
            </h2>
            <p className="my-2">
              We keep information while needed to provide Esportific, maintain tournament records, protect the service, and meet legal requirements. Verification codes expire after five minutes.
            </p>
            <p className="my-2">
              You can request account or data deletion through support. We may retain information where required or allowed by law. Copies you have shared with others may need to be removed by those recipients.
            </p>
          </section>

          <section id="choices" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Your choices and rights
            </h2>
            <p className="my-2">
              You can update some account details in Esportific. You may also request access, correction, or deletion; withdraw consent where applicable; or raise a privacy complaint. We may verify your identity before acting and may retain information where the law allows or requires it.
            </p>
            <p className="my-2">
              If an organizer entered your information, contact us or the organizer to make a request.
            </p>
          </section>

          <section id="children" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Children and player information
            </h2>
            <p className="my-2">
              Organizers may enter player information, including information about people under 18. Organizers must have the authority and any consent required by law before providing it. Contact us if a child’s information was submitted without required authorization.
            </p>
          </section>

          <section id="transfers" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              International processing
            </h2>
            <p className="my-2">
              Esportific is based in India. Our providers may process or store information in other countries. We follow applicable requirements for those transfers.
            </p>
          </section>

          <section id="changes" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Policy changes
            </h2>
            <p className="my-2">
              We will update the date at the top when this policy changes. If a change materially affects how we use information, we will provide notice where required.
            </p>
          </section>

          <section id="contact" className="pb-4 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Contact us
            </h2>
            <p className="my-2">
              For privacy questions, requests, or complaints, use the Contact Support form in Esportific or email{" "}
              <a href="mailto:contact@rangrove.com" className="text-[#111214] underline underline-offset-4 font-medium hover:text-[#e9103f]">
                contact@rangrove.com
              </a>
              . Do not send your password or verification code.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
