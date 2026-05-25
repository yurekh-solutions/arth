import { NavItem, Project, Service, TeamMember, Testimonial, FAQ, BlogPost, NewsArticle, Award, Event, JobPosition } from "./types";
import { HERO_BANNERS, LOGO_IMAGES, ICON_IMAGES, PROJECT_IMAGES, AWARD_IMAGES, TEAM_IMAGES, ALL_IMAGES } from "./real-images";

// Re-export images for use in components
export { HERO_BANNERS, LOGO_IMAGES, ICON_IMAGES, PROJECT_IMAGES, AWARD_IMAGES, TEAM_IMAGES, ALL_IMAGES };

// Company Information - FROM REAL ARTH GROUP WEBSITE
export const COMPANY = {
  name: "Arth Group",
  tagline: "Creating Spaces That Hold Meaning, Value & Purpose",
  description: "At Arth Group, we go beyond constructing buildings. We create spaces that hold meaning, value, and purpose. The name 'Arth' itself signifies essence, reflecting our commitment to crafting environments where businesses thrive, communities flourish, and lifestyles are redefined.",
  mission: "To be recognized as a trusted leader in real estate development, exceeding customer expectations with every project in terms of design, execution, and long-term value creation.",
  vision: "To build a lasting legacy of excellence by redefining urban spaces through innovation, sustainability, and functionality that empowers businesses and communities.",
  founded: "1999",
  experience: "25+",
  phone: ["+91 7285851515", "+91 7285851585"],
  email: "Reachus@arthgroup.co.in",
  address: "Survey No. 1206 & 1208 P1, Jamna Nagar, Near Gurudwara, Opp. Dungra Gam Talav, Vapi Silvassa Road, Dungra, Vapi 396191, Gujarat, India",
  logo: "https://www.arthgroup.co.in/uploads/1740209725_ARTH Logo png_NEW.png",
  favicon: "https://www.arthgroup.co.in/uploads/1740209725_favicon.png",
  social: {
    instagram: "https://www.instagram.com/arthgroupofficial/",
    facebook: "https://www.facebook.com/arthgroupofficial",
    youtube: "https://www.youtube.com/@arthgroupofficial",
    linkedin: "https://www.linkedin.com/company/arthgroup",
  },
  stats: {
    yearsExperience: 25,
    projectsDelivered: 50,
    happyClients: 1000,
    sqftDelivered: 5000000,
  },
  philosophy: {
    title: "Inspired by the Five Fundamental Elements",
    description: "Our philosophy is deeply rooted in balancing nature with urban growth.",
    elements: [
      { name: "Earth", meaning: "Stability", description: "Symbolizes stability, inspiring us to build strong foundations for sustainable communities." },
      { name: "Water", meaning: "Adaptability", description: "Represents adaptability, guiding us to create dynamic, customer-centric spaces." },
      { name: "Air", meaning: "Movement", description: "Signifies movement, encouraging openness, seamless connectivity, and smart designs." },
      { name: "Fire", meaning: "Energy", description: "Represents transformation and energy, driving our passion for innovation." },
      { name: "Sky", meaning: "Limitless", description: "Symbolizes limitless possibilities and our vision for the future." },
    ]
  },
};

// Stats for Homepage
export const STATS = [
  {
    value: "25+",
    label: "Years of Excellence",
    icon: "Calendar",
  },
  {
    value: "50+",
    label: "Projects Delivered",
    icon: "Building2",
  },
  {
    value: "1000+",
    label: "Happy Clients",
    icon: "Users",
  },
  {
    value: "5M+",
    label: "Sq. Ft. Delivered",
    icon: "Maximize",
  },
];

// Navigation
// Navigation Menu - MATCHING REAL ARTH GROUP WEBSITE
export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Core Values", href: "/about/core-values" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "The Frontedge Park", href: "/projects/the-frontedge-park" },
      { label: "Vedant Connect", href: "/projects/vedant-connect" },
      { label: "The Rise", href: "/projects/the-rise" },
      { label: "Rivium", href: "/projects/rivium" },
    ],
  },
  {
    label: "Join Us",
    href: "/career",
    children: [
      { label: "Career", href: "/career" },
      { label: "Current Openings", href: "/career/openings" },
      { label: "Life at Arth", href: "/career/life-at-arth" },
      { label: "Channel Partner", href: "/channel-partner" },
      { label: "NRI Services", href: "/nri" },
    ],
  },
  {
    label: "Media & Awards",
    href: "/awards",
    children: [
      { label: "News & Press Releases", href: "/news" },
      { label: "Awards & Recognitions", href: "/awards" },
      { label: "Events & Announcements", href: "/events" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "the-frontedge-park",
    name: "The Frontedge Park",
    tagline: "Premium Office & Retail Spaces in Vapi",
    description: "A landmark 23-storey commercial integrated business park offering premium office and retail spaces with world-class amenities. Located strategically on Vapi Silvassa Road, The Frontedge Park (TFP) represents the pinnacle of commercial real estate excellence with state-of-the-art infrastructure, modern design, and sustainable features.",
    location: "Jamna Nagar, Vapi (Link Road), Silvassa Road, Dungra, Vapi 396191, Gujarat",
    type: "Commercial Integrated Business Park",
    height: "G+23 Storeys with 2 levels basement parking",
    features: ["23-storey iconic tower", "2 basement parking levels", "High-speed elevators (6+1)", "24/7 CCTV surveillance", "100% power backup", "Advanced fire safety systems", "Rainwater harvesting", "Landscaped green surroundings", "Premium double-height lobbies", "State-of-the-art conference facilities", "Rooftop restaurant & lounge", "Ample visitor parking"],
    amenities: ["Multi-level parking (500+ cars)", "Food court & restaurants", "Gym & fitness center", "Rooftop lounge & terrace", "High-speed fiber optic internet", "Central VRF air conditioning", "Digital visitor management system", "EV charging stations (50+ points)", "IGBC Green Building pre-certified", "Smart building automation (BMS)", "ATM & banking services", "Retail shopping arcade", "Business center & co-working space"],
    image: PROJECT_IMAGES[0],
    gallery: [
      PROJECT_IMAGES[0],
      PROJECT_IMAGES[1],
      PROJECT_IMAGES[2],
      PROJECT_IMAGES[3],
      PROJECT_IMAGES[4],
      PROJECT_IMAGES[5],
    ],
    floorPlans: [
      PROJECT_IMAGES[2],
      PROJECT_IMAGES[3],
    ],
    contactPhone: "+91 7285851515",
  },
  {
    id: "2",
    slug: "vedant-connect",
    name: "Vedant Connect",
    tagline: "Kalyan's Tallest Business Landmark",
    description: "A 23-storey Emirates-inspired commercial tower standing as Kalyan's tallest business landmark. Vedant Connect offers premium office spaces designed for ambitious businesses, with world-class architecture and infrastructure that sets new standards for commercial excellence.",
    location: "Prem Auto Circle, Kalyan",
    type: "Commercial Tower",
    height: "23 Storey",
    features: ["Emirates-inspired architecture", "Kalyan's tallest commercial building", "Premium office spaces", "High-speed elevators", "Grand entrance lobby", "Dedicated parking", "24/7 security", "Power backup", "Fire safety systems", "Smart building features"],
    amenities: ["Multi-level parking", "Business lounge", "Conference rooms", "Cafeteria", "Gym", "Rooftop terrace", "High-speed internet", "Central air conditioning", "Visitor parking", "EV charging"],
    priceRange: "₹44 Lac to ₹3 Crore",
    image: PROJECT_IMAGES[1],
    gallery: [
      PROJECT_IMAGES[1],
      PROJECT_IMAGES[4],
      PROJECT_IMAGES[5],
      PROJECT_IMAGES[6],
      PROJECT_IMAGES[7],
      PROJECT_IMAGES[8],
    ],
    floorPlans: [
      PROJECT_IMAGES[4],
      PROJECT_IMAGES[5],
    ],
    contactPhone: "+91 7285851585",
  },
  {
    id: "3",
    slug: "the-rise",
    name: "The Rise",
    tagline: "Premium Showroom & Office Spaces",
    description: "Located on SG Highway, Gota, Ahmedabad — one of the most sought-after commercial corridors — The Rise offers premium showroom and office spaces designed for businesses that demand excellence. Strategic location ensures maximum visibility and accessibility.",
    location: "SG Highway, Gota, Ahmedabad",
    type: "Premium Showroom & Office Complex",
    height: "Multi-storey",
    features: ["SG Highway frontage", "Premium showrooms", "Modern office spaces", "Ample parking", "Wide road access", "High visibility location", "Quality construction", "Modern architecture", "Landscaped areas", "Smart infrastructure"],
    amenities: ["Dedicated parking", "Lobby lounge", "Security systems", "Power backup", "Fire safety", "High-speed connectivity", "Central HVAC", "Waste management", "Water recycling", "Green spaces"],
    image: PROJECT_IMAGES[2],
    gallery: [
      PROJECT_IMAGES[2],
      PROJECT_IMAGES[3],
      PROJECT_IMAGES[4],
      PROJECT_IMAGES[5],
      PROJECT_IMAGES[6],
      PROJECT_IMAGES[7],
      PROJECT_IMAGES[8],
      PROJECT_IMAGES[9],
    ],
    floorPlans: [
      PROJECT_IMAGES[4],
      PROJECT_IMAGES[5],
    ],
    contactPhone: "+91 88667 02470",
  },
  {
    id: "4",
    slug: "rivium",
    name: "Rivium",
    tagline: "Where Work Meets Excellence",
    description: "Rivium represents the next evolution in commercial real estate — premium office and commercial spaces designed with an emphasis on the working environment. Every detail is crafted to enhance productivity, creativity, and business growth.",
    location: "Strategic Location, Gujarat",
    type: "Premium Commercial Complex",
    height: "Multi-storey",
    features: ["Premium office suites", "Flexible floor plates", "Modern architecture", "Green building standards", "Smart infrastructure", "High-speed connectivity", "Premium interiors", "Natural lighting focus", "Sound insulation", "Ergonomic design"],
    amenities: ["Underground parking", "Executive lounge", "Meeting rooms", "Cafeteria & food court", "Wellness center", "Terrace garden", "EV charging", "Bicycle parking", "Concierge services", "Art installations"],
    image: PROJECT_IMAGES[3],
    gallery: [
      PROJECT_IMAGES[3],
      PROJECT_IMAGES[4],
      PROJECT_IMAGES[5],
      PROJECT_IMAGES[6],
      PROJECT_IMAGES[7],
      PROJECT_IMAGES[8],
    ],
    floorPlans: [
      PROJECT_IMAGES[5],
    ],
    contactPhone: "+91 7285851515",
  },
];

// Services Data
export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "office-spaces",
    title: "Premium Office Spaces",
    shortDescription: "State-of-the-art office environments designed to boost productivity and foster innovation.",
    fullDescription: "We develop premium office spaces that are more than just workplaces. Our office developments feature cutting-edge architecture, smart building systems, sustainable design practices, and world-class amenities that attract top-tier businesses and talent. From flexible co-working environments to dedicated corporate floors, we create spaces where businesses thrive.",
    icon: "Building2",
    features: ["Smart building automation", "Flexible floor plans", "Premium interiors", "Green building certified", "High-speed connectivity", "24/7 access & security", "Conference facilities", "Wellness amenities"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    id: "2",
    slug: "retail-hubs",
    title: "Retail Hubs",
    shortDescription: "High-street retail spaces engineered for maximum footfall and commercial success.",
    fullDescription: "Our retail developments are strategically located at high-traffic intersections and commercial corridors, designed to maximize visibility and accessibility for retailers. We create vibrant shopping destinations with premium frontage, ample parking, and modern infrastructure that drives footfall and enhances the retail experience for both businesses and consumers.",
    icon: "Store",
    features: ["High-street locations", "Maximum visibility", "Ample parking", "Modern infrastructure", "Premium frontage", "Food court integration", "Event spaces", "Digital signage ready"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
  },
  {
    id: "3",
    slug: "commercial-real-estate",
    title: "Commercial Real Estate Solutions",
    shortDescription: "End-to-end commercial development solutions tailored for maximum ROI.",
    fullDescription: "From concept to completion, we offer comprehensive commercial real estate solutions that maximize returns for investors and end-users alike. Our expertise spans market analysis, strategic planning, design development, construction management, and post-delivery services. We create commercial properties that appreciate in value while meeting the evolving needs of modern businesses.",
    icon: "TrendingUp",
    features: ["Market analysis", "Strategic planning", "Design development", "Construction management", "Post-delivery services", "Investment advisory", "Lease management", "Property maintenance"],
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=80",
  },
  {
    id: "4",
    slug: "land-acquisition",
    title: "Land Acquisition",
    shortDescription: "Strategic land procurement for optimal development potential and value creation.",
    fullDescription: "Our land acquisition team identifies and secures strategically located parcels with exceptional development potential. We conduct thorough due diligence, regulatory assessment, and market analysis to ensure every acquisition aligns with our vision of creating value. Our extensive network and market intelligence give us access to prime locations before they reach the open market.",
    icon: "MapPin",
    features: ["Due diligence", "Regulatory assessment", "Market analysis", "Strategic locations", "Title verification", "Environmental clearance", "Government liaison", "Development potential analysis"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
  },
  {
    id: "5",
    slug: "construction",
    title: "Construction Services",
    shortDescription: "World-class construction with unwavering commitment to quality and deadlines.",
    fullDescription: "With over 25 years of construction expertise, we deliver projects that meet the highest international standards. Our construction division handles industrial buildings, warehouses, commercial complexes, and road infrastructure. We leverage modern construction techniques, rigorous quality control, and efficient project management to deliver on time and within budget, every time.",
    icon: "HardHat",
    features: ["Industrial buildings", "Warehouses", "Commercial complexes", "Road construction", "Quality control", "Timeline management", "Safety compliance", "Modern techniques"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    id: "6",
    slug: "project-management",
    title: "Project Management",
    shortDescription: "End-to-end project execution with precision, efficiency, and excellence.",
    fullDescription: "Our project management expertise ensures seamless execution from planning to handover. We coordinate architects, engineers, contractors, and stakeholders to deliver projects that exceed expectations. Our systematic approach includes detailed scheduling, resource optimization, quality assurance, risk management, and transparent communication at every stage.",
    icon: "ClipboardCheck",
    features: ["Planning & scheduling", "Resource optimization", "Quality assurance", "Risk management", "Stakeholder coordination", "Budget management", "Progress reporting", "Handover management"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
  },
];

// Team Members - WITH REAL IMAGES FROM WEBSITE
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Mr. Ajay Thakur",
    role: "Founder & Chairman",
    bio: "With over 25 years of extensive experience in industrial building, warehouse, commercial complexes, and road construction, Mr. Ajay Thakur has established Arth Group as a trusted name in real estate development. His expertise spans across IPO advisory, capital markets, and multiple leadership roles across real estate and financial sectors.",
    image: "https://www.arthgroup.co.in/uploads/1742373473_Ajay-removebg-preview.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "chairman@arthgroup.co.in",
    },
  },
  {
    id: "2",
    name: "Mr. Yatin Patel",
    role: "Director",
    bio: "Leading Arth Group's vision for innovation and excellence in commercial real estate development with a focus on sustainable and modern design.",
    image: "https://www.arthgroup.co.in/uploads/1742550454_Yatin patel_MMM.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "director@arthgroup.co.in",
    },
  },
  {
    id: "3",
    name: "Mr. Shiv",
    role: "Project Head",
    bio: "Overseeing project execution and ensuring timely delivery with the highest quality standards across all Arth Group developments.",
    image: "https://www.arthgroup.co.in/uploads/1742550481_shiv-removebg-preview.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "projects@arthgroup.co.in",
    },
  },
  {
    id: "4",
    name: "Leadership Team",
    role: "Management",
    bio: "Our dedicated leadership team brings together decades of combined experience in real estate, construction, finance, and customer relations.",
    image: "https://www.arthgroup.co.in/uploads/1741771842_IMG_9928.JPG",
    social: {
      linkedin: "https://linkedin.com",
      email: "management@arthgroup.co.in",
    },
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Anand Desai",
    role: "CEO",
    company: "TechVista Solutions",
    content: "Our experience with Arth Group has been exceptional. The Frontedge Park office space has transformed our work culture. The attention to detail, quality of construction, and premium amenities have made it the perfect home for our growing team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
  },
  {
    id: "2",
    name: "Neha Kapoor",
    role: "Managing Director",
    company: "Kapoor Retail Group",
    content: "Investing in Vedant Connect was one of our best business decisions. The Emirates-inspired architecture and strategic location have significantly boosted our brand visibility. Arth Group delivers on their promises.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
  },
  {
    id: "3",
    name: "Sanjay Gupta",
    role: "Founder",
    company: "Gupta Industries",
    content: "Working with Arth Group for our warehouse construction was seamless. Their 25+ years of experience truly shows in their execution quality. They completed the project ahead of schedule without compromising on quality.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
  },
  {
    id: "4",
    name: "Meera Shah",
    role: "Director",
    company: "Shah & Associates",
    content: "The Rise in Ahmedabad has exceeded all our expectations. The premium office space on SG Highway gives us the professional image we need. Arth Group's commitment to excellence is evident in every corner.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5,
  },
  {
    id: "5",
    name: "Rahul Joshi",
    role: "CTO",
    company: "InnoTech Labs",
    content: "The smart building features and sustainability focus at Rivium align perfectly with our company values. It's not just an office space — it's an ecosystem that nurtures innovation and growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
];

// FAQs
export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "What services does Arth Group offer?",
    answer: "Arth Group offers comprehensive real estate development services including premium office spaces, retail hubs, commercial real estate solutions, land acquisition, construction services (industrial buildings, warehouses, commercial complexes), and end-to-end project management.",
    category: "Services",
  },
  {
    id: "2",
    question: "Where is Arth Group located?",
    answer: "Our headquarters is located at Survey No. 1206 & 1208 P1, Jamna Nagar, Near Gurudwara, Opp. Dungra Gam Talav, Vapi Silvassa Road, Dungra, Vapi 396191, India. We also have presence in Ahmedabad and Kalyan.",
    category: "Company",
  },
  {
    id: "3",
    question: "What makes Arth Group different from other developers?",
    answer: "Arth Group stands out with 25+ years of expertise, a commitment to innovation and sustainability, strategic location selection, premium design execution, and an unwavering focus on quality and transparency. We don't just build structures — we create spaces that hold meaning, value, and purpose.",
    category: "Company",
  },
  {
    id: "4",
    question: "What types of properties does Arth Group specialize in?",
    answer: "We specialize in commercial real estate including premium office towers, retail hubs, integrated business parks, industrial buildings, and warehouses. Our flagship projects like The Frontedge Park (Vapi), Vedant Connect (Kalyan), The Rise (Ahmedabad), and Rivium showcase our diverse capabilities.",
    category: "Properties",
  },
  {
    id: "5",
    question: "How can I inquire about leasing or purchasing property?",
    answer: "You can reach us through multiple channels: Call us at +91 7285851515 or +91 7285851585, email us at Reachus@arthgroup.co.in, or fill out the inquiry form on our Contact page. Our team typically responds within 24 hours.",
    category: "Inquiry",
  },
  {
    id: "6",
    question: "Does Arth Group offer customization for office spaces?",
    answer: "Yes! We understand that every business has unique requirements. We offer flexible floor plans and customization options for office spaces, allowing you to design your workspace to perfectly suit your team's needs and company culture.",
    category: "Services",
  },
  {
    id: "7",
    question: "What is the price range for properties at Vedant Connect?",
    answer: "Properties at Vedant Connect range from ₹44 Lac to ₹3 Crore, offering options for businesses of various sizes. Contact our sales team for detailed pricing based on specific floor plans and customization requirements.",
    category: "Pricing",
  },
  {
    id: "8",
    question: "Are Arth Group properties eco-friendly?",
    answer: "Absolutely. Sustainability is a core value at Arth Group. Our projects incorporate green building certifications, rainwater harvesting, solar energy systems, EV charging stations, waste management systems, and energy-efficient designs to minimize environmental impact.",
    category: "Sustainability",
  },
  {
    id: "9",
    question: "What amenities are available in Arth Group's commercial properties?",
    answer: "Our properties feature premium amenities including multi-level parking, high-speed elevators, 24/7 security, power backup, central air conditioning, fitness centers, food courts, conference facilities, EV charging, landscaped areas, and smart building automation systems.",
    category: "Amenities",
  },
  {
    id: "10",
    question: "Does Arth Group handle construction in-house?",
    answer: "Yes. With 25+ years of construction expertise, our in-house team handles all aspects of construction including planning, execution, quality control, and project management. This integrated approach ensures superior quality control and timely delivery.",
    category: "Construction",
  },
];

// Blog Posts
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-commercial-real-estate-2025",
    title: "The Future of Commercial Real Estate in 2025 and Beyond",
    excerpt: "Explore emerging trends reshaping commercial real estate — from hybrid workspaces to sustainable buildings and smart infrastructure.",
    content: "The commercial real estate landscape is undergoing a transformative shift...",
    author: "Arth Group Research Team",
    date: "2025-03-15",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    tags: ["commercial real estate", "trends", "future", "investment"],
    readTime: "8 min read",
  },
  {
    id: "2",
    slug: "smart-investment-guide-commercial-property",
    title: "Smart Investment Guide: Commercial Property in Gujarat",
    excerpt: "A comprehensive guide for investors looking to capitalize on Gujarat's booming commercial real estate market.",
    content: "Gujarat has emerged as one of India's fastest-growing commercial hubs...",
    author: "Vikram Patel",
    date: "2025-02-28",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80",
    tags: ["investment", "Gujarat", "commercial property", "guide"],
    readTime: "10 min read",
  },
  {
    id: "3",
    slug: "sustainable-buildings-green-future",
    title: "Building Sustainably: How Green Design Drives Business Value",
    excerpt: "Discover how sustainable building practices create long-term value for businesses and the environment.",
    content: "Sustainability in real estate is no longer optional — it's a business imperative...",
    author: "Priya Mehta",
    date: "2025-02-10",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
    tags: ["sustainability", "green building", "eco-friendly", "value"],
    readTime: "7 min read",
  },
  {
    id: "4",
    slug: "choosing-right-commercial-space",
    title: "How to Choose the Right Commercial Space for Your Business",
    excerpt: "Key factors to consider when selecting commercial property — location, infrastructure, growth potential, and ROI.",
    content: "Choosing the right commercial space is one of the most critical business decisions...",
    author: "Rajesh Sharma",
    date: "2025-01-20",
    category: "Commercial Spaces",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    tags: ["office space", "commercial", "business", "tips"],
    readTime: "6 min read",
  },
  {
    id: "5",
    slug: "architecture-trends-modern-offices",
    title: "Architecture Trends Shaping Modern Office Spaces",
    excerpt: "From biophilic design to flexible layouts — the architectural innovations transforming how we work.",
    content: "Modern office architecture has evolved beyond cubicles and corner offices...",
    author: "Priya Mehta",
    date: "2025-01-05",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
    tags: ["architecture", "design", "offices", "innovation"],
    readTime: "9 min read",
  },
];

// News Articles
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    slug: "frontedge-park-milestone-completion",
    title: "The Frontedge Park Achieves Major Construction Milestone",
    excerpt: "Arth Group celebrates the structural completion of its flagship 23-storey commercial tower in Vapi.",
    content: "In a significant achievement, Arth Group today announced...",
    date: "2025-04-01",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    source: "Business Standard",
  },
  {
    id: "2",
    slug: "vedant-connect-launch-kalyan",
    title: "Vedant Connect Launch: Kalyan Gets Its Tallest Business Landmark",
    excerpt: "Arth Group unveils Vedant Connect, a 23-storey Emirates-inspired commercial tower in Kalyan.",
    content: "Marking its entry into the Mumbai Metropolitan Region...",
    date: "2025-03-15",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    source: "Economic Times",
  },
  {
    id: "3",
    slug: "arth-group-sustainability-award",
    title: "Arth Group Recognized for Sustainable Development Practices",
    excerpt: "Industry body honors Arth Group for commitment to green building standards and environmental stewardship.",
    content: "Arth Group has been recognized by the Indian Green Building Council...",
    date: "2025-02-20",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
    source: "Construction World",
  },
];

// Awards
export const AWARDS: Award[] = [
  {
    id: "1",
    slug: "best-commercial-project-south-gujarat-2025",
    title: "Best Commercial Project South Gujarat 2025",
    description: "We are truly honoured to be recognized as the Best Commercial Project in South Gujarat! This prestigious recognition is a reflection of our unwavering commitment to redefining commercial spaces with innovation, superior quality, and a futuristic vision.",
    year: "2025",
    image: AWARD_IMAGES[0],
    organization: "Real Estate Excellence Awards",
  },
  {
    id: "2",
    slug: "outstanding-commercial-development-2025",
    title: "Outstanding Commercial Development Award",
    description: "Designed to inspire success, our project stands as a testament to modern infrastructure, seamless connectivity, and sustainable growth. This achievement wouldn't have been possible without the trust of our clients, the dedication of our team, and the support of our partners.",
    year: "2025",
    image: AWARD_IMAGES[1],
    organization: "Gujarat Realty Summit",
  },
  {
    id: "3",
    slug: "innovation-commercial-spaces-2024",
    title: "Innovation in Commercial Spaces",
    description: "Here's to building spaces that drive progress and set new industry benchmarks! Recognized for redefining commercial spaces with innovation, superior quality, and a futuristic vision.",
    year: "2024",
    image: AWARD_IMAGES[2],
    organization: "Indian Property Awards",
  },
];

// Events
export const EVENTS: Event[] = [
  {
    id: "1",
    slug: "frontedge-park-grand-opening",
    title: "The Frontedge Park Grand Opening Ceremony",
    description: "Join us for the grand unveiling of The Frontedge Park — Vapi's most iconic commercial landmark. Experience the future of commercial real estate.",
    date: "2025-06-15",
    location: "The Frontedge Park, Vapi",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    type: "Launch Event",
  },
  {
    id: "2",
    slug: "investor-meet-2025",
    title: "Arth Group Investor Meet 2025",
    description: "An exclusive event for investors to explore upcoming projects, understand market trends, and discover premium investment opportunities with Arth Group.",
    date: "2025-07-20",
    location: "Hotel Marriott, Ahmedabad",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    type: "Investor Event",
  },
  {
    id: "3",
    slug: "sustainability-summit-2025",
    title: "Sustainability in Real Estate Summit",
    description: "A thought leadership event bringing together industry experts to discuss sustainable development practices, green technologies, and the future of eco-friendly construction.",
    date: "2025-09-10",
    location: "Convention Center, Vadodara",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    type: "Conference",
  },
];

// Job Positions
export const JOB_POSITIONS: JobPosition[] = [
  {
    id: "1",
    title: "Senior Architect",
    department: "Design & Architecture",
    location: "Vapi, Gujarat",
    type: "Full-time",
    description: "Lead architectural design for premium commercial projects. Create innovative, sustainable designs that set new standards in commercial real estate.",
    requirements: ["B.Arch/M.Arch degree", "8+ years experience in commercial architecture", "Proficiency in AutoCAD, Revit, 3D Studio Max", "Green building certification knowledge", "Leadership experience"],
    posted: "2025-04-01",
  },
  {
    id: "2",
    title: "Project Manager",
    department: "Project Management",
    location: "Vapi, Gujarat",
    type: "Full-time",
    description: "Oversee end-to-end project execution for commercial developments. Ensure quality, timeline, and budget targets are consistently met.",
    requirements: ["B.E. Civil/Architecture", "10+ years in construction project management", "PMP certification preferred", "Experience with high-rise commercial projects", "Strong communication skills"],
    posted: "2025-03-25",
  },
  {
    id: "3",
    title: "Sales Executive - Commercial",
    department: "Sales & Marketing",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    description: "Drive sales for premium commercial properties. Build relationships with investors, businesses, and HNI clients seeking commercial real estate.",
    requirements: ["MBA in Marketing/Sales", "3+ years in real estate sales", "Strong network in commercial real estate", "Excellent presentation skills", "Target-driven mindset"],
    posted: "2025-04-05",
  },
  {
    id: "4",
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Vapi, Gujarat",
    type: "Full-time",
    description: "Lead digital marketing strategies for Arth Group's brands and projects. Drive online visibility, lead generation, and brand engagement.",
    requirements: ["Bachelor's in Marketing/Communications", "5+ years in digital marketing", "Experience in real estate marketing", "SEO/SEM expertise", "Analytics proficiency"],
    posted: "2025-04-10",
  },
];

// Core Values - FROM REAL ARTH GROUP WEBSITE
export const CORE_VALUES = [
  {
    title: "INTEGRITY",
    description: "We uphold honesty, transparency, and ethical business practices, ensuring every project reflects our commitment to trust, quality, and excellence.",
    icon: ICON_IMAGES[0],
  },
  {
    title: "TIMELY DELIVERY",
    description: "We prioritize efficiency, meeting deadlines without compromising on quality, ensuring our clients receive projects on time with precision and perfection.",
    icon: ICON_IMAGES[1],
  },
  {
    title: "QUALITY",
    description: "Our projects exceed industry standards by integrating superior materials, cutting-edge technology, and expert craftsmanship to ensure long-term durability and excellence.",
    icon: ICON_IMAGES[2],
  },
  {
    title: "CUSTOMER SATISFACTION",
    description: "Understanding client needs, delivering beyond expectations, and building strong relationships define our customer-centric approach, making satisfaction our top priority.",
    icon: ICON_IMAGES[3],
  },
  {
    title: "SAFETY",
    description: "From worker well-being to structural security, we ensure every project follows the highest safety standards, providing a secure environment for all.",
    icon: ICON_IMAGES[4],
  },
  {
    title: "INNOVATION",
    description: "By embracing new technologies, creative designs, and sustainable solutions, we continuously push boundaries to redefine modern real estate development.",
    icon: ICON_IMAGES[5],
  },
  {
    title: "SOCIAL COMMITMENTS",
    description: "Through CSR initiatives, education, and community support, we strive to create a positive societal impact and drive inclusive growth.",
    icon: ICON_IMAGES[6],
  },
  {
    title: "SUSTAINABILITY",
    description: "We are committed to eco-friendly practices, green building standards, and creating spaces that harmonize with nature for future generations.",
    icon: ICON_IMAGES[7],
  },
];

// Homepage Hero Banners - FROM REAL ARTH GROUP WEBSITE
// (Already exported above)

// About Section Image - FROM REAL ARTH GROUP WEBSITE  
export const ABOUT_SECTION_IMAGE = HERO_BANNERS[4]; // 5th banner
export const PARTNERS = [
  "TechVista Solutions", "Kapoor Retail Group", "Gupta Industries",
  "Shah & Associates", "InnoTech Labs", "Metro Construction",
  "GreenBuild India", "Prime Architects", "SafeSpace Security",
  "SmartElevators Ltd", "EcoPower Systems", "UrbanScape Designers",
];
