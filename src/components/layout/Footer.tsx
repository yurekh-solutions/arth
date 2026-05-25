import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, LOGO_IMAGES } from "@/lib/constants";
import Newsletter from "./Newsletter";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Awards", href: "/awards" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const projectLinks = [
  { label: "The Frontedge Park", href: "/projects/the-frontedge-park" },
  { label: "Vedant Connect", href: "/projects/vedant-connect" },
  { label: "The Rise", href: "/projects/the-rise" },
  { label: "Rivium", href: "/projects/rivium" },
];

export default function Footer() {
  return (
    <footer className="w-full text-white" style={{ background: '#0b4761' }}>
      <div className="container-custom py-16 md:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={LOGO_IMAGES.logo}
                alt={COMPANY.name}
                width={150}
                height={43}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: '#ffffff' }}>
              {COMPANY.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={COMPANY.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="Youtube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-wide" style={{ color: '#ffffff' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Projects */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-wide" style={{ color: '#ffffff' }}>
              Our Projects
            </h4>
            <ul className="space-y-2.5">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 tracking-wide" style={{ color: '#ffffff' }}>
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#c6873b' }} />
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#c6873b' }} />
                <a
                  href={`tel:${COMPANY.phone[0]}`}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  {COMPANY.phone[0]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#c6873b' }} />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-10 border-t border-glass-border">
          <Newsletter />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            &copy; 2025 {COMPANY.name}. All Rights Reserved.
          </p>
          <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            Designed and Developed by{" "}
            <a 
              href="https://yurekh.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity" 
              style={{ color: '#c6873b' }}
            >
              YurekhSolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
