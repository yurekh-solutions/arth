import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="glass-card-strong p-8 md:p-12 max-w-4xl mx-auto rounded-2xl">
              <p className="text-white/50 text-sm mb-8">Last Updated: January 2025</p>

              <div className="space-y-8 text-white/70 leading-relaxed">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    1. Information Collection
                  </h2>
                  <p className="mb-3">
                    Arth Group (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects information that you
                    voluntarily provide when you interact with our website, submit inquiries,
                    register for property tours, or engage with our services. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Personal identification information (name, email, phone number)</li>
                    <li>Postal address and communication preferences</li>
                    <li>Property preferences and investment interests</li>
                    <li>Technical data such as IP address, browser type, and device information</li>
                    <li>Usage data including pages visited and time spent on our website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    2. Use of Information
                  </h2>
                  <p className="mb-3">We use the collected information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To respond to your inquiries and provide property-related information</li>
                    <li>To schedule site visits, virtual tours, and consultations</li>
                    <li>To send project updates, newsletters, and promotional materials (with consent)</li>
                    <li>To improve our website functionality and user experience</li>
                    <li>To comply with legal obligations and protect our legitimate interests</li>
                    <li>To process transactions and maintain records as required by law</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    3. Data Security
                  </h2>
                  <p>
                    We implement industry-standard security measures to protect your personal
                    information from unauthorized access, alteration, disclosure, or destruction.
                    These measures include encrypted data transmission (SSL/TLS), secure servers,
                    access controls, and regular security audits. However, no method of electronic
                    transmission or storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    4. Cookies
                  </h2>
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your
                    browsing experience, analyze website traffic, and personalize content. Cookies
                    are small text files stored on your device. You can control cookie preferences
                    through your browser settings. Disabling certain cookies may limit some website
                    functionality. For more details, please refer to our Cookie Policy.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    5. Third-Party Links
                  </h2>
                  <p>
                    Our website may contain links to third-party websites, services, or platforms
                    (e.g., social media, payment gateways, mapping services). We are not responsible
                    for the privacy practices or content of these external sites. We encourage you
                    to review the privacy policies of any third-party services before providing
                    personal information.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    6. Your Rights
                  </h2>
                  <p className="mb-3">
                    Under applicable data protection laws, you have the following rights regarding
                    your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Right to access your personal data we hold</li>
                    <li>Right to rectification of inaccurate or incomplete data</li>
                    <li>Right to erasure (&ldquo;right to be forgotten&rdquo;) where applicable</li>
                    <li>Right to restrict or object to processing</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    7. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy, wish to exercise your
                    rights, or have concerns about how we handle your data, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-white/5 rounded-xl">
                    <p className="text-white font-medium">Arth Group</p>
                    <p>Email: Reachus@arthgroup.co.in</p>
                    <p>Phone: +91 7285851515</p>
                    <p>Address: Survey No. 1206 & 1208 P1, Jamna Nagar, Vapi 396191, India</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
