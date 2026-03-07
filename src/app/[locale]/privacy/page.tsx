export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray">
        <h1 className="text-4xl font-bold text-[#1A1A2E]">Privacy Policy</h1>
        <p className="text-gray-500 mt-2">Last updated: March 2026</p>

        <div className="mt-12 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-[#1A1A2E]">1. Data Controller</h2>
            <p>
              VAILIS.ai (&quot;we&quot;, &quot;us&quot;) is the data controller for personal data
              collected through this website. Contact: hello@vailis.ai
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#1A1A2E]">2. Data We Collect</h2>
            <p>
              We collect information you provide: name, email, company, and message content
              when you submit forms or request downloads. We may collect usage data via
              analytics (with your consent).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#1A1A2E]">3. Purpose of Processing</h2>
            <p>
              We process your data to respond to inquiries, provide requested services,
              send marketing (with consent), and improve our website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#1A1A2E]">4. Legal Basis (GDPR)</h2>
            <p>
              We process data based on: consent (analytics, marketing), contract performance
              (responding to requests), and legitimate interest (website improvement).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#1A1A2E]">5. Your Rights</h2>
            <p>
              You have the right to access, rectify, erase, restrict processing, data
              portability, and object. For EU/EEA residents, you may lodge a complaint
              with your supervisory authority.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#1A1A2E]">6. Data Retention</h2>
            <p>
              We retain form submissions for up to 3 years or until you request deletion.
              Analytics data is retained per our analytics provider&apos;s policy.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#1A1A2E]">7. Cookies</h2>
            <p>
              We use necessary cookies for site functionality. Analytics and marketing
              cookies require your opt-in consent (EU/EEA visitors).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
