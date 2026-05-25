import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
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
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing or using the Arth Group website (www.arthgroup.co.in) and our
                    services, you agree to be bound by these Terms of Service. If you do not
                    agree to all the terms and conditions, you must not access the website or
                    use our services. These terms apply to all visitors, users, and others who
                    access or interact with our digital platforms.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    2. Services
                  </h2>
                  <p className="mb-3">
                    Arth Group provides commercial real estate development, property leasing,
                    and related services. Through our website, we offer:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Information about our projects, services, and commercial properties</li>
                    <li>Online inquiry and contact forms for prospective clients</li>
                    <li>Virtual tour scheduling and property information requests</li>
                    <li>Downloadable resources including brochures and reports</li>
                    <li>Newsletter subscriptions and updates about upcoming projects</li>
                  </ul>
                  <p className="mt-3">
                    All property details, pricing, and availability information on our website
                    are subject to change without prior notice and do not constitute a binding offer.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    3. Intellectual Property
                  </h2>
                  <p>
                    All content on this website — including but not limited to text, graphics,
                    logos, images, renders, floor plans, videos, design elements, and software —
                    is the exclusive property of Arth Group or its licensors and is protected by
                    Indian and international copyright, trademark, and intellectual property laws.
                    You may not reproduce, distribute, modify, create derivative works from, or
                    publicly display any content without prior written consent from Arth Group.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    4. Limitation of Liability
                  </h2>
                  <p>
                    To the fullest extent permitted by applicable law, Arth Group shall not be
                    liable for any indirect, incidental, special, consequential, or punitive
                    damages, including but not limited to loss of profits, data, or goodwill,
                    arising from your use of or inability to use our website or services. The
                    information provided on this website is for general informational purposes
                    only and should not be construed as professional advice. Property investments
                    carry inherent risks, and prospective buyers/tenants should conduct their
                    own due diligence.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    5. Governing Law
                  </h2>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with
                    the laws of India. Any disputes arising out of or in connection with these
                    terms shall be subject to the exclusive jurisdiction of the courts located in
                    Vapi, Gujarat, India. Both parties agree to submit to the personal jurisdiction
                    of such courts.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    6. Changes to Terms
                  </h2>
                  <p>
                    We reserve the right to modify or replace these Terms of Service at any time
                    at our sole discretion. Material changes will be communicated through a
                    prominent notice on our website. Your continued use of the website after
                    changes are posted constitutes acceptance of the revised terms. We encourage
                    you to review this page periodically for the latest information.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                    7. Contact
                  </h2>
                  <p>
                    For any questions regarding these Terms of Service, please reach out to us:
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
