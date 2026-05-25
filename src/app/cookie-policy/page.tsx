import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="Understanding how we use cookies on our website"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />

      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="p-8 md:p-12 max-w-4xl mx-auto rounded-2xl" style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', boxShadow: '0 8px 32px rgba(10, 37, 64, 0.08)' }}>
              <p className="text-sm mb-8" style={{ color: 'var(--color-muted-foreground)' }}>Last Updated: January 2025</p>

              <div className="space-y-8 leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                    What Are Cookies?
                  </h2>
                  <p>
                    Cookies are small text files that are placed on your device when you visit
                    a website. They are widely used to make websites work more efficiently,
                    provide a better user experience, and give website owners useful information
                    about how their site is being used. Cookies can be &ldquo;persistent&rdquo; (remaining
                    on your device until deleted) or &ldquo;session&rdquo; cookies (deleted when you close
                    your browser).
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                    Types of Cookies We Use
                  </h2>
                  <p className="mb-4">
                    The following table explains the categories of cookies used on our website:
                  </p>

                  {/* Cookie Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                          <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--color-primary)' }}>Category</th>
                          <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--color-primary)' }}>Purpose</th>
                          <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--color-primary)' }}>Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                          <td className="py-3 px-4 text-accent font-medium">Essential</td>
                          <td className="py-3 px-4">
                            Required for the website to function properly. These enable core
                            functionality such as page navigation, secure areas access, and
                            form submissions. Cannot be disabled.
                          </td>
                          <td className="py-3 px-4" style={{ color: 'var(--color-muted-foreground)' }}>Session</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                          <td className="py-3 px-4 text-accent font-medium">Analytics</td>
                          <td className="py-3 px-4">
                            Help us understand how visitors interact with our website by
                            collecting anonymous usage data. This includes pages visited,
                            time spent, and traffic sources (e.g., Google Analytics).
                          </td>
                          <td className="py-3 px-4" style={{ color: 'var(--color-muted-foreground)' }}>Up to 2 years</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-accent font-medium">Marketing</td>
                          <td className="py-3 px-4">
                            Used to track visitors across websites to display relevant
                            advertisements. These cookies help measure the effectiveness
                            of marketing campaigns and deliver personalized content.
                          </td>
                          <td className="py-3 px-4" style={{ color: 'var(--color-muted-foreground)' }}>Up to 1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                    How to Manage Cookies
                  </h2>
                  <p className="mb-3">
                    You have the right to control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong style={{ color: 'var(--color-primary)' }}>Browser Settings:</strong> Most browsers allow
                      you to view, manage, delete, and block cookies. Note that blocking all
                      cookies may affect the functionality of some websites.
                    </li>
                    <li>
                      <strong style={{ color: 'var(--color-primary)' }}>Cookie Preferences:</strong> When you first
                      visit our website, you can set your cookie preferences through our consent
                      banner.
                    </li>
                    <li>
                      <strong style={{ color: 'var(--color-primary)' }}>Opt-Out Links:</strong> For analytics cookies,
                      you can use the Google Analytics opt-out browser add-on.
                    </li>
                    <li>
                      <strong style={{ color: 'var(--color-primary)' }}>Device Settings:</strong> On mobile devices,
                      you can manage cookie preferences through your device&apos;s privacy settings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                    Changes to This Cookie Policy
                  </h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in
                    technology, legislation, or our data practices. Any changes will be posted
                    on this page with an updated revision date. We encourage you to periodically
                    review this policy to stay informed about how we use cookies.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                    Contact Us
                  </h2>
                  <p>
                    If you have questions about our use of cookies, please contact us:
                  </p>
                  <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
                    <p className="font-medium" style={{ color: 'var(--color-primary)' }}>Arth Group</p>
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
