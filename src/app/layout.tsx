import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import FloatingButtons from "@/components/ui/FloatingButtons";

// Suppress hydration warnings from browser extensions (fdprocessedid)
if (typeof window !== "undefined") {
  const suppressHydrationWarning = () => {
    const originalError = console.error;
    console.error = (...args: (string | object)[]) => {
      const message = String(args[0] || "");
      if (
        message.includes("hydration") ||
        message.includes("fdprocessedid") ||
        message.includes("A tree hydrated")
      ) {
        return;
      }
      originalError.apply(console, args);
    };
  };

  if (document.readyState === "complete") {
    suppressHydrationWarning();
  } else {
    window.addEventListener("load", suppressHydrationWarning);
  }
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arthgroup.co.in"),
  title: {
    default: "Arth Group | Premium Commercial Real Estate Developer in India",
    template: "%s | Arth Group",
  },
  description: "Arth Group — Over 25 years of expertise in premium commercial real estate development. Specializing in office spaces, retail hubs, and integrated business parks across Vapi, Ahmedabad, Kalyan & Gujarat, India.",
  keywords: ["Arth Group", "commercial real estate", "office spaces", "retail hubs", "real estate developer", "Vapi", "Gujarat", "Ahmedabad", "Kalyan", "premium commercial property", "business park", "The Frontedge Park", "Vedant Connect", "The Rise", "Rivium"],
  authors: [{ name: "Arth Group" }],
  creator: "Arth Group",
  publisher: "Arth Group",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.arthgroup.co.in",
    siteName: "Arth Group",
    title: "Arth Group | Premium Commercial Real Estate Developer",
    description: "Over 25 years creating spaces that hold meaning, value, and purpose. Premium office spaces, retail hubs, and commercial real estate solutions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Arth Group - Premium Commercial Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arth Group | Premium Commercial Real Estate Developer",
    description: "Over 25 years creating spaces that hold meaning, value, and purpose.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;500;600;700&family=Josefin+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0a2540" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-body bg-background text-foreground antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-16 sm:pt-18 lg:pt-20">{children}</main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
      </body>
    </html>
  );
}
