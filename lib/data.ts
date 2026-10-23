export const profile = {
  name: "Arya Achmad Caesar",
  role: "Full-Stack Developer",
  education: "Informatics Student at Universitas Siliwangi",
  educationDetail: "Bachelor's Degree in Informatics (in progress) · 2023–Present · Semester 7",
  location: "Ciamis, West Java, Indonesia",
  email: "aryacaesars89@gmail.com",
  phone: "+62 895-2439-6489",
  phoneHref: "tel:+6289524396489",
  github: "https://github.com/aryacaesars",
  heroIntro:
    "Full-Stack Developer specializing in Next.js and JavaScript/TypeScript, building modern web applications with a focus on performance, usability, and security.",
  aboutDescription:
    "I'm Arya, a seventh-semester Informatics student at Universitas Siliwangi. I combine full-stack web development with skills in cybersecurity, digital forensics, and AI modeling to build functional applications with security considered from the first line of code.",
  certification: "Junior Web Programmer — BNSP",
  certificationDetail: "LSP Universitas Siliwangi · Issued 5 August 2025 · Valid for 3 years",
  languages: ["Indonesian", "English"],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Astro.js",
  "Tailwind CSS", "shadcn/ui", "Prisma ORM", "PostgreSQL", "Firebase",
  "Docker", "API Integration", "PWAs", "Stripe Webhooks",
  "Subdomain Configuration", "UI/UX Design", "QA Testing",
];

export const experienceItems = [
  {
    title: "Full-Stack Developer Intern",
    company: "EG Dev",
    period: "May 2026 — July 2026",
    accent: "lime" as const,
    rotation: -2,
    responsibilities: [
      "Developed a multi-store e-commerce platform with Next.js, Prisma, and Docker, including secure authentication and subdomain management.",
      "Built merchant and admin dashboards with shadcn/ui for product, order, and customer management.",
      "Built a custom theme engine for dynamic storefront templates and integrated Stripe webhooks.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "CV Alphabet",
    period: "August 2025 — January 2026",
    accent: "blue" as const,
    rotation: 2.5,
    responsibilities: [
      "Designed UI/UX flows and translated designs into interactive interfaces connected to backend APIs.",
      "Implemented Progressive Web App (PWA) features for installation on mobile devices.",
      "Configured subdomain proxies and performed application quality assurance (QA).",
    ],
  },
  {
    title: "General Staff (Full-time)",
    company: "PT Gurita Bisnis Undagi",
    period: "February 2025 — June 2026",
    accent: "lime" as const,
    rotation: -1.5,
    responsibilities: [
      "Prepared company documents, coordinated event vendors, and produced posters and banners.",
    ],
  },
];

export const projects = [
  {
    title: "Toogas",
    subtitle: "Student Workspace",
    description:
      "A centralized dashboard for class schedules, assignments, and class meeting details, with OCR to read schedules and assignment documents from images and PDFs.",
    tags: ["Next.js", "Firebase", "Gemini AI"],
    href: "https://toogas.vercel.app/workspace",
    rotation: -3,
    accent: "lime" as const,
  },
  {
    title: "CIAO",
    subtitle: "Academic & Project Collaboration",
    description:
      "A full-stack web application for academic management and project collaboration, with distinct Student and Freelancer roles.",
    tags: ["Next.js", "Full-Stack", "Collaboration"],
    href: "https://ciao-pink.vercel.app/",
    rotation: 2,
    accent: "blue" as const,
  },
  {
    title: "diAjar",
    subtitle: "Assessment Practice Platform",
    description:
      "A practice-question platform that helps candidates prepare for the Apple Developer Academy online assessment.",
    tags: ["Astro.js", "Education", "Assessment"],
    href: "https://diajar-quiz.vercel.app/",
    rotation: -1.5,
    accent: "lime" as const,
  },
  {
    title: "Let IT Cook",
    subtitle: "Recipe Discovery",
    description:
      "A recipe discovery website that recommends relevant recipes based on the ingredients users have available.",
    tags: ["Recipe Discovery", "Ingredient Search"],
    href: "https://letitcook.vercel.app/",
    rotation: 3,
    accent: "blue" as const,
  },
  {
    title: "Etalase",
    subtitle: "E-Commerce Website Builder",
    description:
      "A no-code e-commerce website builder (SaaS) that lets users create online stores with unique subdomains and integrated shopping features.",
    tags: ["Next.js", "PostgreSQL", "SaaS"],
    href: "https://www.storefront-etalase.web.id/",
    rotation: -2,
    accent: "lime" as const,
  },
  {
    title: "BendaPay",
    subtitle: "School & Parent Payments",
    description:
      "A web-based payment application for students' parents, connected to a school dashboard for managing payments.",
    tags: ["Next.js", "PostgreSQL", "Payments"],
    href: null,
    rotation: 2,
    accent: "blue" as const,
  },
];

export const stats = [
  {
    value: String(projects.length),
    label: "Featured Projects",
    desc: "Student workspaces, academic collaboration, assessment practice, recipes, e-commerce, and school payments.",
  },
  {
    value: String(experienceItems.length),
    label: "Professional Roles",
    desc: "Experience at EG Dev, CV Alphabet, and PT Gurita Bisnis Undagi.",
  },
  {
    value: "2023",
    label: "Informatics Studies Began",
    desc: "Bachelor's degree in progress at Universitas Siliwangi, currently in semester 7.",
  },
  {
    value: String(profile.languages.length),
    label: "Languages",
    desc: profile.languages.join(" & "),
  },
];

export const services = [
  { label: "Full-Stack Development", accent: "lime" as const, rotation: -3 },
  { label: "UI/UX Design", accent: "blue" as const, rotation: 2 },
  { label: "E-Commerce Development", accent: "lime" as const, rotation: -1 },
  { label: "Dashboard Development", accent: "blue" as const, rotation: 3 },
  { label: "Progressive Web Apps", accent: "lime" as const, rotation: -2 },
  { label: "API Integration", accent: "blue" as const, rotation: 2.5 },
];

export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryacaesars/" },
  { label: "Instagram", href: "https://www.instagram.com/aryaacaesar/" },
  { label: "WhatsApp", href: "https://wa.me/6289524396489" },
  { label: "Email", href: `mailto:${profile.email}` },
];
