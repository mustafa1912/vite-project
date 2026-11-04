/**
 * Site Configuration for Mostafa Wahba Portfolio (Apex Next.js 15 Template)
 * Compliant with Envato ThemeForest / Elements Author Standards
 */

export interface SkillItem {
  label: string;
  abbr: string;
  tag: string;
  color: string;
  bg: string;
  border: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  place: string;
  description: string;
  certificateUrl?: string;
}

export interface ProjectItem {
  id: number;
  number: string;
  title: string;
  filter: "WordPress" | "React" | "PHP" | "C#" | "HTML";
  date: string;
  cover: string;
  url?: string;
  tags: string;
  gallery: string[];
  summary?: string;
}

export const siteConfig = {
  // Theme & Meta Information
  templateName: "Mostafa Wahba | Full Stack & Modern JS Developer Portfolio",
  version: "1.0.0",
  author: "Mostafa Wahba",
  authorUrl: "https://mostafa-wahba.vercel.app",

  // Profile Information
  name: "Mostafa Wahba",
  role: "Full Stack & Modern JS Developer",
  shortBio: "I am a versatile Software Developer specializing in modern JavaScript ecosystems (React 19, Next.js 15, TypeScript) and robust backend architectures (Laravel, PHP, REST APIs). I build high-performance, scalable web applications, ranging from complex enterprise ERP systems to conversion-optimized e-commerce stores.",
  avatar: "/assets/images/me/H22C1262.webp",

  // Personal Info (Resume Page)
  personalInfo: {
    firstName: "Mostafa",
    lastName: "Wahba afifa",
    age: "25 Years",
    nationality: "Egyptian",
    freelance: "Available",
    address: "Quesna Menoufia, Egypt",
    phone: "+20 100 288 3812",
    email: "mostafaw338@gmail.com",
    languages: "Arabic, English",
    skype: "mostafa.wahba",
  },

  // Professional Statistics
  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "30+", label: "Completed Projects" },
    { value: "25+", label: "Happy Clients" },
    { value: "100%", label: "Satisfaction Rate" },
  ],

  // Social Links
  socials: [
    { name: "GitHub", url: "https://github.com/mustafa1912", icon: "fa-brands fa-github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mostafa-w-64bbab1a4/", icon: "fa-brands fa-linkedin-in" },
    { name: "Facebook", url: "https://www.facebook.com/mostafaw338/", icon: "fa-brands fa-facebook-f" },
  ],

  // WhatsApp Floating Widget Config
  whatsapp: {
    enabled: true,
    phoneNumber: "201002883812",
    defaultMessage: "Hello Mostafa, I visited your portfolio and would like to discuss a project with you.",
  },

  // Contact Form & EmailJS (Supports environment variables or fallback)
  contact: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_gtk5epn",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_i97xxwh",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Vzj89bsJsqqJOi3PU",
  },

  // Skills
  skills: [
    { label: "TypeScript", abbr: "TS", tag: "Language", color: "#3178c6", bg: "#00152b", border: "#003d73" },
    { label: "Next.js", abbr: "NXT", tag: "Framework", color: "#ffffff", bg: "#111111", border: "#333333" },
    { label: "React", abbr: "RC", tag: "Framework", color: "#61dafb", bg: "#001a26", border: "#004060" },
    { label: "Vue.js", abbr: "VUE", tag: "Framework", color: "#42b883", bg: "#001a11", border: "#004d33" },
    { label: "Nuxt.js", abbr: "NXT", tag: "Framework", color: "#00dc82", bg: "#001a0f", border: "#004d2e" },
    { label: "PHP", abbr: "PHP", tag: "Language", color: "#777bb4", bg: "#0d0f1a", border: "#25273d" },
    { label: "Laravel", abbr: "LAR", tag: "Backend", color: "#ff2d20", bg: "#200604", border: "#50100c" },
    { label: "Tailwind CSS", abbr: "TW", tag: "Styling", color: "#38bdf8", bg: "#001a28", border: "#003a50" },
    { label: "Bootstrap", abbr: "BS", tag: "UI Kit", color: "#60a5fa", bg: "#001a28", border: "#003050" },
    { label: "WordPress", abbr: "WP", tag: "CMS", color: "#4ade80", bg: "#002010", border: "#005025" },
    { label: "Elementor", abbr: "EL", tag: "Builder", color: "#fb923c", bg: "#1a0800", border: "#401800" },
    { label: "SEO Optimization", abbr: "SEO", tag: "Marketing", color: "#22d3ee", bg: "#001a28", border: "#003a50" },
  ] as SkillItem[],

  // Experience Timeline
  experience: [
    {
      time: "2023 - Present",
      title: "Senior Full Stack & Frontend Developer",
      place: "Freelance & Agency Projects",
      description: "Spearheaded the engineering of high-performance web applications, headless real estate portals, and custom WordPress WooCommerce solutions.",
    },
    {
      time: "2021 - 2023",
      title: "Front End Web Developer",
      place: "NajezSoft & Digital Agencies",
      description: "Developed customized, mobile-first web applications using React, modern JavaScript (ES6+), Bootstrap, and responsive UI architectures.",
    },
    {
      time: "2020 - 2021",
      title: "Web Developer",
      place: "Self-Employed",
      description: "Built and deployed conversion-optimized websites, custom themes, and eCommerce systems for diverse regional business clients.",
    },
  ] as TimelineItem[],

  // Education & Certifications
  education: [
    {
      time: "2026",
      title: "Modern JavaScript: ES6 and beyond",
      place: "MaharaTech - ITI",
      description: "Advanced mastery of modern ECMAScript specifications, asynchronous patterns, modules, and reactive JavaScript concepts.",
    },
    {
      time: "2026",
      title: "UX Design Fundamentals",
      place: "MaharaTech - ITI",
      description: "Foundational user experience design, cognitive hierarchy, wireframing, usability testing, and design systems.",
    },
    {
      time: "2022",
      title: "React JS Advanced Specialization",
      place: "MaharaTech - ITI",
      description: "Single-page application state architecture, hooks, performance profiling, and component-driven engineering with React.",
    },
    {
      time: "2021",
      title: "Front End Web Development Professional",
      place: "Udacity",
      description: "Intensive nanotechnology scholarship covering core DOM manipulation, modern responsive web layouts, and interactive SPAs.",
    },
  ] as TimelineItem[],

  // Portfolio Filters
  portfolioFilters: ["All", "WordPress", "React", "PHP", "C#", "HTML"] as const,

  // Portfolio Projects (All 30 authentic projects with real, valid images)
  projects: [
    {
      id: 104,
      number: "01",
      title: "mepco",
      filter: "WordPress",
      date: "Nov 2026",
      cover: "/assets/images/mepco1_result.webp",
      url: "https://mepco-tds.com/",
      tags: "WordPress · Elementor · Power Systems · Grid Integration · Engineering Design · Responsive Design",
      gallery: Array.from({ length: 8 }, (_, i) => `/assets/images/mepco${i + 1}_result.webp`),
    },
    {
      id: 103,
      number: "02",
      title: "daralomran",
      filter: "React",
      date: "Nov 2026",
      cover: "/assets/images/daralomran-1.png",
      url: "https://daralomran-realestate.vercel.app",
      tags: "Next.js · React 19 · TypeScript · Tailwind CSS · Luxury Real Estate · Bilingual",
      gallery: Array.from({ length: 19 }, (_, i) => `/assets/images/daralomran-${i + 1}.png`),
    },
    {
      id: 100,
      number: "03",
      title: "hurghadaway",
      filter: "WordPress",
      date: "Jul 2026",
      cover: "/assets/images/hurghadaway1_result.webp",
      url: "https://hurghadaway.com/",
      tags: "WordPress · Custom Theme · Responsive Design · SEO",
      gallery: Array.from({ length: 7 }, (_, i) => `/assets/images/hurghadaway${i + 1}_result.webp`),
    },
    {
      id: 101,
      number: "04",
      title: "ROI Development",
      filter: "WordPress",
      date: "Jul 2026",
      cover: "/assets/images/roi-development1_result.webp",
      url: "https://roi-development.com/",
      tags: "WordPress · Custom Theme · Responsive Design · SEO",
      gallery: Array.from({ length: 7 }, (_, i) => `/assets/images/roi-development${i + 1}_result.webp`),
    },
    {
      id: 102,
      number: "05",
      title: "Academy Pure Soft",
      filter: "WordPress",
      date: "Jul 2026",
      cover: "/assets/images/academy.pure-soft1_result.webp",
      url: "https://academy.pure-soft.com/",
      tags: "WordPress · Custom Theme · Responsive Design · SEO",
      gallery: Array.from({ length: 11 }, (_, i) => `/assets/images/academy.pure-soft${i + 1}_result.webp`),
    },
    {
      id: 1,
      number: "06",
      title: "Enterprise ERP System",
      filter: "React",
      date: "Jun 2026",
      cover: "/assets/images/erp1_result.webp",
      url: "#",
      tags: "React 19 · TypeScript · Laravel 12 · Tailwind 4 · ERP",
      gallery: Array.from({ length: 8 }, (_, i) => `/assets/images/erp${i + 1}_result.webp`),
    },
    {
      id: 2,
      number: "07",
      title: "Saif_dK Project",
      filter: "HTML",
      date: "May 2026",
      cover: "/assets/images/Saif_dK1.webp",
      url: "https://mustafa1912.github.io/Saif_dK/",
      tags: "HTML5 · CSS3 · JavaScript · Three.js · GSAP · Lenis · Cyberpunk HUD",
      gallery: Array.from({ length: 11 }, (_, i) => `/assets/images/Saif_dK${i + 1}.webp`),
    },
    {
      id: 3,
      number: "08",
      title: "nutramena Project",
      filter: "WordPress",
      date: "May 2026",
      cover: "/assets/images/nutramena1.webp",
      url: "https://nutramena.com/",
      tags: "WordPress · WooCommerce · Elementor · Responsive Design · SEO",
      gallery: Array.from({ length: 13 }, (_, i) => `/assets/images/nutramena${i + 1}.webp`),
    },
    {
      id: 4,
      number: "09",
      title: "issgroups Project",
      filter: "WordPress",
      date: "Mar 2026",
      cover: "/assets/images/issgroups1.webp",
      url: "https://issgroups.com/",
      tags: "WordPress · Custom Theme · Responsive Design · SEO · Performance",
      gallery: Array.from({ length: 10 }, (_, i) => `/assets/images/issgroups${i + 1}.webp`),
    },
    {
      id: 5,
      number: "10",
      title: "chitotech Project",
      filter: "WordPress",
      date: "Jan 2026",
      cover: "/assets/images/chitotech1.webp",
      url: "https://chitotech-egypt.com/",
      tags: "WordPress · WooCommerce · Elementor · Responsive Design · SEO",
      gallery: Array.from({ length: 5 }, (_, i) => `/assets/images/chitotech${i + 1}.webp`),
    },
    {
      id: 6,
      number: "11",
      title: "KanbanBoard Project",
      filter: "React",
      date: "Oct 2025",
      cover: "/assets/images/KanbanBoard1.webp",
      url: "",
      tags: "React · Kanban Board · Drag & Drop · State Management · SPA",
      gallery: Array.from({ length: 3 }, (_, i) => `/assets/images/KanbanBoard${i + 1}.webp`),
    },
    {
      id: 7,
      number: "12",
      title: "insidermenofia Project",
      filter: "WordPress",
      date: "Oct 2025",
      cover: "/assets/images/insidermenofia1.webp",
      url: "https://insidermenofia.com/",
      tags: "WordPress · Custom Theme · Responsive Design · SEO · Performance",
      gallery: Array.from({ length: 7 }, (_, i) => `/assets/images/insidermenofia${i + 1}.webp`),
    },
    {
      id: 8,
      number: "13",
      title: "ugec Project",
      filter: "WordPress",
      date: "Nov 2024",
      cover: "/assets/images/ugec1_result.webp",
      url: "",
      tags: "WordPress · Elementor · ACF · Responsive Design · SEO",
      gallery: Array.from({ length: 4 }, (_, i) => `/assets/images/ugec${i + 1}_result.webp`),
    },
    {
      id: 9,
      number: "14",
      title: "jawdaconsultant Project",
      filter: "WordPress",
      date: "Jan 2024",
      cover: "/assets/images/jawdaconsultant1_result.webp",
      url: "https://jawdaconsultant.com",
      tags: "WordPress · Elementor · ACF · Responsive Design · SEO",
      gallery: [
        "/assets/images/jawdaconsultant1_result.webp",
        "/assets/images/jawdaconsultant3_result.webp",
        "/assets/images/jawdaconsultant4_result.webp",
      ],
    },
    {
      id: 10,
      number: "15",
      title: "al-motamizon Project",
      filter: "PHP",
      date: "Dec 2023",
      cover: "/assets/images/al-motamizon1_result.webp",
      url: "https://al-motamizon.com/ar",
      tags: "PHP · Custom E-Commerce · MySQL · JavaScript · Responsive Design",
      gallery: Array.from({ length: 7 }, (_, i) => `/assets/images/al-motamizon${i + 1}_result.webp`),
    },
    {
      id: 11,
      number: "16",
      title: "ghulam Project",
      filter: "PHP",
      date: "Nov 2023",
      cover: "/assets/images/ghulam1_result.webp",
      url: "https://ghulam.najezsoft.com/ar",
      tags: "PHP · Custom Development · MySQL · Bootstrap · Responsive Design",
      gallery: [1, 2, 3, 4, 5, 6, 7, 9].map((n) => `/assets/images/ghulam${n}_result.webp`),
    },
    {
      id: 12,
      number: "17",
      title: "noorcontrol Project",
      filter: "PHP",
      date: "Nov 2023",
      cover: "/assets/images/noorcontrol1_result.webp",
      url: "https://noorcontrol.com/",
      tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: Array.from({ length: 7 }, (_, i) => `/assets/images/noorcontrol${i + 1}_result.webp`),
    },
    {
      id: 13,
      number: "18",
      title: "asiaf Project",
      filter: "PHP",
      date: "Oct 2023",
      cover: "/assets/images/asiaf1_result.webp",
      url: "https://www.asiaf.com.sa/",
      tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: Array.from({ length: 5 }, (_, i) => `/assets/images/asiaf${i + 1}_result.webp`),
    },
    {
      id: 14,
      number: "19",
      title: "kfs-hiet Project",
      filter: "React",
      date: "Aug 2023",
      cover: "/assets/images/kfs-hiet1_result.webp",
      url: "https://kfs-hiet.edu.eg/",
      tags: "React · Custom Development · Responsive Design · SPA · API Integration",
      gallery: Array.from({ length: 10 }, (_, i) => `/assets/images/kfs-hiet${i + 1}_result.webp`),
    },
    {
      id: 15,
      number: "20",
      title: "citysquares Project",
      filter: "WordPress",
      date: "Jul 2023",
      cover: "/assets/images/citysquares1_result.webp",
      url: "",
      tags: "WordPress · Elementor · ACF · Responsive Design · SEO",
      gallery: Array.from({ length: 7 }, (_, i) => `/assets/images/citysquares${i + 1}_result.webp`),
    },
    {
      id: 16,
      number: "21",
      title: "osqufia Project",
      filter: "PHP",
      date: "Jun 2023",
      cover: "/assets/images/osqufia1_result.webp",
      url: "",
      tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: Array.from({ length: 16 }, (_, i) => `/assets/images/osqufia${i + 1}_result.webp`),
    },
    {
      id: 17,
      number: "22",
      title: "whitesand Project",
      filter: "PHP",
      date: "Nov 2021",
      cover: "/assets/images/whitesand1_result.webp",
      url: "https://www.whitesand-eg.com/",
      tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: Array.from({ length: 5 }, (_, i) => `/assets/images/whitesand${i + 1}_result.webp`),
    },
    {
      id: 18,
      number: "23",
      title: "us Project",
      filter: "PHP",
      date: "May 2023",
      cover: "/assets/images/us1_result.webp",
      url: "",
      tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: Array.from({ length: 9 }, (_, i) => `/assets/images/us${i + 1}_result.webp`),
    },
    {
      id: 19,
      number: "24",
      title: "CMS Project",
      filter: "React",
      date: "Feb 2021",
      cover: "/assets/images/cms_result.webp",
      url: "",
      tags: "React · Custom CMS · REST API · Responsive Design · SPA",
      gallery: ["/assets/images/cms_result.webp"],
    },
    {
      id: 20,
      number: "25",
      title: "HCR Project",
      filter: "C#",
      date: "Feb 2021",
      cover: "/assets/images/hcr1_result.webp",
      url: "",
      tags: "C# · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: ["/assets/images/hcr1_result.webp"],
    },
    {
      id: 21,
      number: "26",
      title: "naseq Project",
      filter: "PHP",
      date: "Feb 2021",
      cover: "/assets/images/naseq8_result.webp",
      url: "",
      tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: ["/assets/images/naseq8_result.webp"],
    },
    {
      id: 22,
      number: "27",
      title: "thite Project",
      filter: "PHP",
      date: "Feb 2021",
      cover: "/assets/images/thite1_result.webp",
      url: "https://thiet.edu.eg/ar",
      tags: "C# · ASP.NET · JavaScript · HTML5 · CSS3 · Responsive Design",
      gallery: Array.from({ length: 6 }, (_, i) => `/assets/images/thite${i + 1}_result.webp`),
    },
    {
      id: 23,
      number: "28",
      title: "henkleez Project",
      filter: "PHP",
      date: "Feb 2021",
      cover: "/assets/images/henkleez7_result.webp",
      url: "https://www.henkleez.com/ar",
      tags: "PHP · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive Design",
      gallery: ["/assets/images/henkleez7_result.webp"],
    },
    {
      id: 24,
      number: "29",
      title: "market Project",
      filter: "HTML",
      date: "Feb 2020",
      cover: "/assets/images/market9_result.webp",
      url: "",
      tags: "HTML5 · CSS3 · JavaScript · E-Commerce UI · Responsive Design",
      gallery: [
        "/assets/images/market9_result.webp",
        "/assets/images/market1_result.webp",
        "/assets/images/market2_result.webp",
        "/assets/images/market3_result.webp",
        "/assets/images/market4_result.webp",
        "/assets/images/market5_result.webp",
      ],
    },
    {
      id: 25,
      number: "30",
      title: "dashboed Project",
      filter: "HTML",
      date: "Feb 2020",
      cover: "/assets/images/dashboed7_result.webp",
      url: "",
      tags: "HTML5 · CSS3 · JavaScript · Dashboard UI · Responsive Design",
      gallery: [
        "/assets/images/dashboed7_result.webp",
        "/assets/images/dashboed1_result.webp",
        "/assets/images/dashboed2_result.webp",
        "/assets/images/dashboed3_result.webp",
        "/assets/images/dashboed4_result.webp",
        "/assets/images/dashboed5_result.webp",
        "/assets/images/dashboed6_result.webp",
      ],
    },
  ] as ProjectItem[],
};
