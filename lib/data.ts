export const profile = {
  name: "Arya Achmad Caesar",
  role: "Junior Web Developer",
  education: "Informatics Student at Universitas Siliwangi",
  location: "Tasikmalaya / Bandung, Indonesia",
  email: "aryaachmadcaesar@gmail.com",
  heroIntro:
    "Junior Web Developer focused on modern frontend experiences, UI design, and scalable web systems.",
  aboutDescription:
    "Informatics student passionate about frontend & backend development, modern UI/UX, and creative digital experiences.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  {
    value: "5+",
    label: "Shipped Projects",
    desc: "Crafted end-to-end with modern frontend stacks and clean architecture.",
  },
  {
    value: "8+",
    label: "Tools & Frameworks",
    desc: "From Next.js and Tailwind to Cursor AI and GitHub Copilot — fluent across the modern stack.",
  },
  {
    value: "2",
    label: "Active Roles",
    desc: "Currently balancing studies with frontend development and operational work.",
  },
  {
    value: "100%",
    label: "Detail Oriented",
    desc: "Every pixel, transition, and interaction tuned with intention and care.",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "API Integration",
  "UI/UX Design",
  "QA Testing",
];

export const aiWorkflow = ["VSCode", "GitHub Copilot", "Cursor AI"];

export const experienceItems = [
  {
    title: "General Staff",
    company: "PT Gurita Bisnis Undagi",
    location: "Bandung, Indonesia",
    period: "February 2025 — Present",
    accent: "lime" as const,
    rotation: -2,
    responsibilities: [
      "Internal & external documentation",
      "Vendor communication",
      "Event poster & banner design",
      "Administrative support",
      "Cross-functional teamwork",
    ],
  },
  {
    title: "Frontend Developer",
    company: "CV Alphabet",
    location: "Tasikmalaya, Indonesia",
    period: "August 2025 — January 2026",
    accent: "blue" as const,
    rotation: 2.5,
    responsibilities: [
      "UI/UX Design",
      "Frontend slicing implementation",
      "API integration",
      "Proxy subdomain configuration",
      "QA testing",
    ],
  },
];

export const projects = [
  {
    title: "Sanydressline",
    subtitle: "Dress Catalog Website",
    description:
      "Premium online dress catalog with responsive browsing and product storytelling.",
    tags: ["Next.js", "Tailwind", "E-Commerce"],
    rotation: -3,
    accent: "lime" as const,
  },
  {
    title: "PT Gurita Bisnis Undagi",
    subtitle: "Company Profile Website",
    description:
      "Modern corporate profile site with clean structure and strong visual hierarchy.",
    tags: ["Next.js", "Tailwind", "Corporate"],
    rotation: 2,
    accent: "blue" as const,
  },
  {
    title: "Niskala Publikasi Indonesia",
    subtitle: "Landing Page Website",
    description:
      "Conversion-focused landing page with cinematic transitions and persuasive flow.",
    tags: ["Next.js", "Framer Motion", "Landing"],
    rotation: -1.5,
    accent: "lime" as const,
  },
  {
    title: "Pesantren Persis Benda",
    subtitle: "Financial Dashboard",
    description:
      "Data-driven dashboard tracking pesantren financials with clarity and accessibility.",
    tags: ["Dashboard", "Data Viz", "JavaScript"],
    rotation: 3,
    accent: "blue" as const,
  },
  {
    title: "Wali Santri Dashboard",
    subtitle: "Student Financial Monitoring",
    description:
      "Guardian-focused dashboard for transparent monitoring of student financials.",
    tags: ["Next.js", "Education", "System"],
    rotation: -2,
    accent: "lime" as const,
  },
];

export const services = [
  { label: "Frontend Development", accent: "lime" as const, rotation: -3 },
  { label: "UI/UX Design", accent: "blue" as const, rotation: 2 },
  { label: "Landing Page Development", accent: "lime" as const, rotation: -1 },
  { label: "Dashboard Development", accent: "blue" as const, rotation: 3 },
  { label: "Responsive Website Design", accent: "lime" as const, rotation: -2 },
  { label: "API Integration", accent: "blue" as const, rotation: 2.5 },
];

export const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Email", href: "mailto:aryaachmadcaesar@gmail.com" },
];
