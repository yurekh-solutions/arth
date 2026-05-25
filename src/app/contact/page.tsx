"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/ui/ContactForm";
import { COMPANY } from "@/lib/constants";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-accent" />,
    title: "Address",
    content: COMPANY.address,
  },
  {
    icon: <Phone className="w-6 h-6 text-accent" />,
    title: "Phone",
    content: COMPANY.phone.join(" / "),
  },
  {
    icon: <Mail className="w-6 h-6 text-accent" />,
    title: "Email",
    content: COMPANY.email,
  },
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const offices = [
  {
    name: "Vapi HQ (Main Office)",
    address: "Survey No. 1206 & 1208 P1, Jamna Nagar, Near Gurudwara, Vapi Silvassa Road, Dungra, Vapi 396191",
    phone: "+91 7285851515",
  },
  {
    name: "Ahmedabad Office",
    address: "SG Highway, Gota, Ahmedabad, Gujarat",
    phone: "+91 88667 02470",
  },
  {
    name: "Kalyan Office",
    address: "Prem Auto Circle, Kalyan, Maharashtra",
    phone: "+91 7285851585",
  },
];

const socialLinks = [
  { icon: <InstagramIcon className="w-5 h-5" />, href: COMPANY.social.instagram, label: "Instagram" },
  { icon: <FacebookIcon className="w-5 h-5" />, href: COMPANY.social.facebook, label: "Facebook" },
  { icon: <YoutubeIcon className="w-5 h-5" />, href: COMPANY.social.youtube, label: "YouTube" },
  { icon: <LinkedinIcon className="w-5 h-5" />, href: COMPANY.social.linkedin, label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <main style={{ background: 'var(--color-background)', minHeight: '100vh' }}>
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss your next project"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Form */}
            <ScrollReveal direction="left">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" >
                Send Us a Message
              </h2>
              <ContactForm />
            </ScrollReveal>

            {/* Right: Contact Info */}
            <ScrollReveal direction="right">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
                Get in Touch
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="neumorphic p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(224, 122, 95, 0.15)' }}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-1" style={{ color: 'var(--color-primary)' }}>{info.title}</h3>
                      <p className="text-sm leading-relaxed responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Our Offices
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 responsive-text px-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Visit us at any of our locations across India.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {offices.map((office, index) => (
              <GlassCard key={office.name} delay={index * 0.1}>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <h3 className="font-heading text-base sm:text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
                    {office.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3 pl-8 responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>
                  {office.address}
                </p>
                <p className="text-sm pl-8 flex items-center gap-2" style={{ color: 'var(--color-muted-foreground)' }}>
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <a href={`tel:${office.phone}`} className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-accent)' }}>
                    {office.phone}
                  </a>
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Find Us on Map
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 responsive-text px-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Our headquarters is strategically located in Vapi, Gujarat with easy access from major highways.
            </p>
          </ScrollReveal>
          <div className="glass-card-strong overflow-hidden rounded-2xl" style={{ boxShadow: '8px 8px 16px rgba(10, 37, 64, 0.08), -8px -8px 16px rgba(255, 255, 255, 0.95)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.123456789!2d72.9167!3d20.3711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIyJzE2LjAiTiA3MsKwNTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Arth Group Office Location"
            />
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              Connect With Us
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-muted-foreground)' }}>
              Follow us on social media for the latest updates and behind-the-scenes content.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <ScrollReveal key={social.label} direction="scale">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-3 transition-all duration-300"
                  style={{ border: '1px solid rgba(224, 122, 95, 0.2)' }}
                >
                  <span style={{ color: 'var(--color-accent)' }}>{social.icon}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>{social.label}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
