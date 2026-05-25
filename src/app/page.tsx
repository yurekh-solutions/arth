"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";
import BackToTop from "@/components/ui/BackToTop";
import { HERO_BANNERS, PROJECT_IMAGES } from "@/lib/real-images";
import { PROJECTS, CORE_VALUES, COMPANY, TESTIMONIALS } from "@/lib/constants";
import heroBg1 from "@/assets/hero-2.jpg";
import heroBg2 from "@/assets/hero-3.jpg";
import heroBg3 from "@/assets/hero-4.jpg";
import heroBg4 from "@/assets/hero-5.jpg";
import earthImg from "@/assets/el-earth.jpg";
import waterImg from "@/assets/el-water.jpg";
import fireImg from "@/assets/el-fire.jpg";
import skyImg from "@/assets/el-sky (1).jpg";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const heroImages = [
  heroBg1.src,
  heroBg2.src,
  heroBg3.src,
  heroBg4.src,
];

const fiveElements = [
  { name: "Earth", meaning: "Stability", description: "Symbolizes stability, inspiring us to build strong foundations for sustainable communities.", image: earthImg.src },
  { name: "Water", meaning: "Adaptability", description: "Represents adaptability, guiding us to create dynamic, customer-centric spaces.", image: waterImg.src },
  { name: "Air", meaning: "Movement", description: "Signifies movement, encouraging openness, seamless connectivity, and smart designs." },
  { name: "Fire", meaning: "Energy", description: "Represents transformation and energy, driving our passion for innovation.", image: fireImg.src },
  { name: "Sky", meaning: "Limitless", description: "Symbolizes limitless possibilities and our vision for the future.", image: skyImg.src },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 80) {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    } else if (touchEndX - touchStartX > 80) {
      setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  return (
    <main className="relative overflow-hidden" style={{ margin: 0 }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ margin: 0 }}>
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="w-full h-screen flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/25" />
        </div>

        {/* Touch & Swipe Support */}
       

        {/* Dots Navigation */}
        

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Badge - No Animation */}
            <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-base font-semibold" style={{ color: '#ffffff' }}>
                25+ Years of Excellence
              </span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#ffffff', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Crafting Tomorrow&apos;s Skylines with Vision & Excellence
            </h1>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed max-w-4xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Premium Commercial Spaces in Gujarat
            </p>
            <p className="font-sans text-base sm:text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              From Vapi to Ahmedabad, we create spaces that hold meaning, value, and purpose. Transforming visions into landmark developments across Gujarat and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-[#cf9461] hover:bg-[#b8845a] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ color: '#ffffff' }}
              >
                Explore Projects <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/30 transition-all duration-300"
                style={{ color: '#ffffff' }}
              >
                Discover Arth
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Five Elements Carousel */}
      <section className="py-12 md:py-16" style={{ background: '#faf8f5', margin: 0, padding: '3rem 0' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3" style={{ color: '#4a2c2a' }}>
                Inspired by the Five Fundamental Elements
              </h2>
              <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#6b5b4f' }}>
                Our philosophy is deeply rooted in balancing nature with urban growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {fiveElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 md:p-6 text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(198, 135, 59, 0.2)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                {element.image && (
                  <div className="mb-3 md:mb-4 mx-auto" style={{ width: '100px', height: '100px', maxWidth: '120px' }}>
                    <Image
                      src={element.image as string}
                      alt={element.name}
                      width={120}
                      height={120}
                      className="object-cover rounded-full w-full h-full"
                    />
                  </div>
                )}
                {!element.image && (
                  <div className="mb-3 md:mb-4 mx-auto flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: '#c6873b' }}>
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                )}
                <h3 className="font-heading text-lg md:text-xl font-bold mb-1 md:mb-2" style={{ color: '#4a2c2a' }}>
                  {element.name}
                </h3>
                <p className="text-xs md:text-sm font-semibold mb-2" style={{ color: '#c6873b' }}>
                  {element.meaning}
                </p>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6b5b4f' }}>
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Who We Are */}
      <section className="py-16 md:py-24" style={{ background: '#faf8f5' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://www.arthgroup.co.in/uploads/1740659505_Arth Group_Website_Banner_2025_05.jpg"
                  alt="About Arth Group"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#4a2c2a' }}>
                Who We Are
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ color: '#6b5b4f' }}>
                <p>
                  At <strong className="text-[#4a2c2a]">Arth Group</strong>, we go beyond constructing buildings. We create spaces that hold <strong className="text-[#4a2c2a]">meaning, value, and purpose</strong>. The name &quot;Arth&quot; itself signifies <strong className="text-[#4a2c2a]">essence</strong>, reflecting our commitment to crafting <strong className="text-[#4a2c2a]">environments where businesses thrive, communities flourish, and lifestyles are redefined</strong>.
                </p>
                <p>
                  Inspired by the <strong className="text-[#4a2c2a]">five fundamental elements - Earth, Water, Air, Fire, and Sky.</strong> Our philosophy is deeply rooted in balancing <strong className="text-[#4a2c2a]">nature with urban growth</strong>.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Earth symbolizes stability, inspiring us to build strong foundations for sustainable communities.</li>
                  <li>Water represents adaptability, guiding us to create dynamic, customer-centric spaces.</li>
                  <li>Air signifies movement, encouraging openness, seamless connectivity, and smart designs.</li>
                </ul>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 text-base font-semibold rounded-full transition-all duration-300"
                style={{ background: '#c6873b', color: '#ffffff' }}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#4a2c2a' }}>
                Core Values
              </h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: '#6b5b4f' }}>
                Our core values define who we are and guide every project we undertake. These values are like the founding pillars that support our vision, our ethics and our duty towards society.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 h-full flex flex-col"
                style={{
                  background: 'rgba(250, 248, 245, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(198, 135, 59, 0.15)',
                  borderRadius: '16px',
                }}
              >
                <div className="mb-4" style={{ width: '60px', height: '60px' }}>
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-3" style={{ color: '#4a2c2a' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b5b4f' }}>
                  {value.description}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#c6873b' }}
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
        </div>
        </div>
      </section>

      {/* Featured Project - The Frontedge Park */}
      <section className="py-16 md:py-24" style={{ background: '#faf8f5' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#4a2c2a' }}>
                OUR <span style={{ color: '#c6873b' }}>PROJECTS</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Project Images Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: '16/10' }}
            >
              <Image
                src={PROJECT_IMAGES[0]}
                alt="The Frontedge Park"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right: Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6" style={{ color: '#4a2c2a' }}>
                The Frontedge Park – The Ultimate Business & Retail Destination
              </h3>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#6b5b4f' }}>
                The Frontedge Park is redefining Vapi&apos;s commercial landscape with premium office spaces and high-street retail. Strategically located, it offers a dynamic environment for businesses to thrive and brands to shine. Designed for growth and success, it&apos;s the future of business in Vapi.
              </p>
              
              {/* Download Brochure Button */}
              <a
                href="https://www.arthgroup.co.in/uploads/products/1742907221_TFP Plan Brochure_19032025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                style={{ background: '#0b4761', color: '#ffffff' }}
              >
                Download Brochure <Download className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#4a2c2a' }}>
                Project Gallery
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
              "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
              "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
              "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&q=80",
              "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80",
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
              "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80",
              "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&q=80",
              "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={image}
                  alt={`Project Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24" style={{ background: '#faf8f5' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#4a2c2a' }}>
                What Our Clients Say
              </h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: '#6b5b4f' }}>
                Real feedback from our valued clients
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Anand Desai", role: "CEO", company: "TechVista Solutions", content: "Our experience with Arth Group has been exceptional. The Frontedge Park office space has transformed our work culture. The attention to detail, quality of construction, and premium amenities have made it the perfect home for our growing team.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
              { name: "Neha Kapoor", role: "Managing Director", company: "Kapoor Retail Group", content: "Investing in Vedant Connect was one of our best business decisions. The Emirates-inspired architecture and strategic location have significantly boosted our brand visibility. Arth Group delivers on their promises.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
              { name: "Sanjay Gupta", role: "Founder", company: "Gupta Industries", content: "Working with Arth Group for our warehouse construction was seamless. Their 25+ years of experience truly shows in their execution quality. They completed the project ahead of schedule without compromising on quality.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
              { name: "Meera Shah", role: "Director", company: "Shah & Associates", content: "The Rise in Ahmedabad has exceeded all our expectations. The premium office space on SG Highway gives us the professional image we need. Arth Group's commitment to excellence is evident in every corner.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956" },
              { name: "Rahul Joshi", role: "CTO", company: "InnoTech Labs", content: "The smart building features and sustainability focus at Rivium align perfectly with our company values. It's not just an office space — it's an ecosystem that nurtures innovation and growth.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
              { name: "Priya Sharma", role: "Operations Head", company: "LogiCorp India", content: "The commercial space at The Frontedge Park has given our business the visibility and infrastructure we needed. The location, amenities, and support from Arth Group team have been outstanding.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 md:p-8 h-full flex flex-col"
                style={{
                  background: '#ffffff',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(198, 135, 59, 0.15)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="#c6873b" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base leading-relaxed mb-6 flex-1" style={{ color: '#6b5b4f' }}>
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Client Info - With Image */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'rgba(198, 135, 59, 0.15)' }}>
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#c6873b] flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#4a2c2a' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs" style={{ color: '#6b5b4f' }}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#4a2c2a' }}>
                Social Media
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                  <InstagramIcon />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#4a2c2a' }}>Arth Group</p>
                  <p className="text-sm" style={{ color: '#6b5b4f' }}>@arthgroupofficial</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <motion.a
              href="https://www.instagram.com/arthgroupofficial/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="https://www.arthgroup.co.in/uploads/1740650784_Arth Group_Website_Banner_2025_01.jpg"
                alt="Instagram Post 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <InstagramIcon />
              </div>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/arthgroupofficial/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="https://www.arthgroup.co.in/uploads/1740650798_Arth Group_Website_Banner_2025_02.jpg"
                alt="Instagram Post 2"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <InstagramIcon />
              </div>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/arthgroupofficial/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="https://www.arthgroup.co.in/uploads/1740650807_Arth Group_Website_Banner_2025_03.jpg"
                alt="Instagram Post 3"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <InstagramIcon />
              </div>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/arthgroupofficial/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="https://www.arthgroup.co.in/uploads/1740650817_Arth Group_Website_Banner_2025_04.jpg"
                alt="Instagram Post 4"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <InstagramIcon />
              </div>
            </motion.a>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/arthgroupofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', color: '#ffffff' }}
            >
              <InstagramIcon /> Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#0b4761' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://www.arthgroup.co.in/front/assets/img/other/shape1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
                Ready to Elevate Your Business?
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                Discover premium commercial spaces designed for success. Let&apos;s create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: '#c6873b', color: '#ffffff' }}
                >
                  Explore Projects <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full border-2 transition-all duration-300"
                  style={{ borderColor: '#ffffff', color: '#ffffff' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
