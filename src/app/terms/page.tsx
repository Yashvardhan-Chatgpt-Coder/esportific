import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions for using Esportific esports tournament management software, including account access, tournament records, and service policies.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Esportific – Terms and Conditions",
    description:
      "Read the Terms and Conditions for using Esportific esports tournament management software.",
    url: "https://esportific.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111214]">
      <Header />

      <main className="flex-1 w-full max-w-[860px] mx-auto px-5 py-10 sm:py-14">
        <header className="border-b border-[#e5e7eb] pb-6 mb-8">
          <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.03em] leading-[1.15] text-[#111214]">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#666b73] max-w-[680px]">
            These terms cover your access to and use of Esportific, a tournament-management service.
          </p>
          <p className="mt-3 text-[12px] font-medium text-[#666b73]">
            Last updated: 15 October 2026
          </p>
        </header>

        <article className="space-y-8 text-[14px] leading-[1.7] text-[#373b42]">
          <section id="agreement" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Agreement
            </h2>
            <p className="my-2">
              By creating an account or using Esportific, you agree to these terms and our Privacy Policy. If you do not agree, do not use the service. “Esportific,” “we,” and “us” refer to the service and the person or entity operating it; “you” means the account holder or other person using the service.
            </p>
          </section>

          <section id="accounts-and-access" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Accounts and access
            </h2>
            <ul className="my-3 space-y-2 list-disc pl-5 text-[#373b42]">
              <li>Provide accurate account information and keep it up to date.</li>
              <li>Keep your sign-in details secure. You are responsible for activity through your account unless it results from our failure to take legally required care.</li>
              <li>Tell us promptly through Esportific Support if you believe someone has accessed your account without permission.</li>
              <li>Use the service only if you can legally enter into these terms. If you are under the age of majority where you live, use it only with the involvement and permission of a parent or legal guardian.</li>
            </ul>
          </section>

          <section id="using-esportific" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Using Esportific
            </h2>
            <p className="my-2">
              Esportific provides tools to organize esports events, teams, rosters, matches, scoring, standings, and exports. Features may change as the service develops.
            </p>
            <p className="my-2">You agree not to:</p>
            <ul className="my-3 space-y-2 list-disc pl-5 text-[#373b42]">
              <li>break the law or violate another person’s rights;</li>
              <li>upload malicious code, interfere with the service, or try to access accounts or systems without authorization;</li>
              <li>misuse, disrupt, reverse engineer, or place unreasonable demands on the service; or</li>
              <li>use Esportific to harass, deceive, or distribute content you are not authorized to share.</li>
            </ul>
          </section>

          <section id="events-and-information" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Events and information you provide
            </h2>
            <p className="my-2">
              You are responsible for the information and materials you submit, including event details, team and player records, results, logos, and images. You must have the rights and permissions needed to upload and use them, and to provide personal information about other people.
            </p>
            <p className="my-2">
              Organizers are responsible for checking event settings, scoring rules, match results, standings, and exports before relying on or sharing them. Esportific provides management tools; it does not independently verify the accuracy of organizer-submitted information.
            </p>
            <p className="my-2">
              You keep your rights to your content. You give Esportific permission to host, process, display, and reproduce it as needed to operate, secure, and provide the features you use. This permission ends when the content is removed, except for copies retained in backups or where retention is legally necessary.
            </p>
          </section>

          <section id="intellectual-property" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Our service and intellectual property
            </h2>
            <p className="my-2">
              Esportific and its software, design, branding, and materials are protected by applicable intellectual-property laws. These terms give you permission to use the service for its intended purpose; they do not transfer ownership to you. Do not copy or use our branding or software outside the permissions granted by law or by us.
            </p>
            <p className="my-2">
              You may not use another person’s logo, image, name, or other protected material unless you have permission or another legal basis to do so.
            </p>
          </section>

          <section id="availability" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Availability and third-party services
            </h2>
            <p className="my-2">
              We work to keep Esportific available and secure, but cannot promise uninterrupted or error-free operation. Maintenance, updates, network problems, or events outside our control may affect access. We may suspend or limit features when reasonably needed for maintenance, security, legal compliance, or to address misuse.
            </p>
            <p className="my-2">
              Some features may rely on services operated by others. Their services are subject to their own terms and availability. We are not responsible for third-party services we do not operate.
            </p>
          </section>

          <section id="suspension" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Suspension and account closure
            </h2>
            <p className="my-2">
              You may stop using Esportific and request account deletion through Esportific Support. We may restrict or suspend access if reasonably necessary to protect users or the service, address a serious breach of these terms, or comply with law. Where practical, we will explain the reason and provide an opportunity to resolve the issue.
            </p>
            <p className="my-2">
              Closing an account does not automatically remove information that must be retained for security, legal, or operational reasons. Our Privacy Policy explains retention and deletion.
            </p>
          </section>

          <section id="disclaimers" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Disclaimers and liability
            </h2>
            <p className="my-2">
              Esportific is provided on an “as available” basis. To the extent permitted by law, we do not make guarantees that the service will always be uninterrupted, error-free, or suitable for every purpose.
            </p>
            <p className="my-2">
              Nothing in these terms excludes or limits a right or liability that cannot lawfully be excluded or limited. To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of the service. This does not limit liability for fraud, wilful misconduct, or other liability that applicable law does not allow us to limit.
            </p>
          </section>

          <section id="changes" className="border-b border-[#e5e7eb] pb-8 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Changes to these terms
            </h2>
            <p className="my-2">
              We may update these terms as Esportific or applicable requirements change. We will update the date above and provide notice of material changes where required. Continued use after updated terms take effect means you accept them; if you do not agree, stop using the service.
            </p>
          </section>

          <section id="governing-law" className="pb-4 scroll-mt-20">
            <h2 className="text-[18px] font-bold tracking-tight text-[#111214] mb-3">
              Governing law and contact
            </h2>
            <p className="my-2">
              These terms are governed by the laws of India, subject to any mandatory rights or protections that apply where you live. Courts with jurisdiction under applicable law may hear disputes.
            </p>
            <p className="my-2">
              For questions or concerns about these terms, contact us through the Contact Support form in Esportific.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
