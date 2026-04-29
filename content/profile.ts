/**
 * Single source of truth for portfolio content.
 * Sourced from LinkedIn profile: https://www.linkedin.com/in/monika-rana-2a0112120/
 *
 * Edit this file to update any text, role, project, or skill on the site.
 */

export const profile = {
  name: "Monika Rana",
  shortName: "Monika",
  headline: "Managing Associate @ LEXORBIS • Registered Patent Agent (IN/PA 4365)",
  tagline:
    "Helping innovators secure and defend their inventions across global jurisdictions — patent prosecution, prior-art analytics, and patentability strategy.",
  location: "Delhi, India",
  totalExperience: "7+ years",
  email: "Rana.monika109@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/monika-rana-2a0112120/",
    github: "",
    twitter: "",
    email: "mailto:Rana.monika109@gmail.com",
  },
  about: `Registered Indian Patent Agent (IN/PA 4365) and Managing Associate at LEXORBIS, with 7+ years of focused practice in patent prosecution and IP strategy.

I specialize in prosecuting patent applications across multiple jurisdictions — including the EPO, USPTO, IP Australia, the Bangladesh Patent Office, the Indian Patent Office, CNIPA (China), and others — and conduct in-depth prior-art and patentability searches across leading IP databases.

My background bridges law and engineering: an M.Tech in Computer Science combined with deep technical fluency lets me read claims like an engineer and argue them like an attorney. The result — sharper, more defensible patent strategies for inventors, startups, and enterprise clients across software, electronics, and emerging tech.`,
} as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string | null;
  duration: string;
  description: string;
  highlights?: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "LEXORBIS",
    role: "Managing Associate",
    location: "Delhi, India",
    start: "May 2025",
    end: null,
    duration: "Present",
    description:
      "Lead patent prosecution mandates and IP strategy assignments for Indian and international clients across multiple technology domains.",
    highlights: [
      "Manage end-to-end patent prosecution across EP, US, AU, BD, IN, CN and other jurisdictions",
      "Oversee prior-art and patentability searches; advise on filing, opposition, and prosecution strategy",
      "Mentor junior associates on claim drafting, office-action responses, and client communication",
    ],
    stack: ["Patent Prosecution", "IP Strategy", "Claim Drafting", "Client Advisory"],
  },
  {
    company: "LEXORBIS",
    role: "Senior Associate",
    location: "New Delhi, India",
    start: "Jan 2024",
    end: "May 2025",
    duration: "1 yr 4 mos",
    description:
      "Senior associate focused on technically complex patent prosecution and global filing strategy.",
    highlights: [
      "Drafted and prosecuted patent applications in software, electronics, and computer-implemented inventions",
      "Worked closely with foreign associates to align prosecution strategy across jurisdictions",
      "Led prior-art and patentability searches for inventors and corporate clients",
    ],
    stack: ["Patent Drafting", "Office Actions", "Prior-Art Search", "Foreign Filing"],
  },
  {
    company: "LEXORBIS",
    role: "Patent Associate",
    location: "Delhi, India",
    start: "Oct 2019",
    end: "Dec 2023",
    duration: "4 yrs 2 mos",
    description:
      "Built deep expertise in patent law, prosecution, and search analytics across diverse technologies.",
    highlights: [
      "Prosecuted patent applications in computer science, electronics, and allied fields",
      "Conducted patentability, freedom-to-operate, and invalidity searches across leading IP databases",
      "Earned certification as a Registered Indian Patent Agent (IN/PA 4365) in Aug 2022",
    ],
    stack: [
      "Patent Prosecution",
      "Patentability Analysis",
      "Freedom-to-Operate",
      "IP Databases",
    ],
  },
  {
    company: "anovIP",
    role: "Research Associate",
    location: "New Delhi Area, India",
    start: "Apr 2018",
    end: "Sep 2019",
    duration: "1 yr 5 mos",
    description:
      "Started IP career conducting technology research and patent searches for global clients.",
    highlights: [
      "Performed patentability, validity, and prior-art searches across multiple technical domains",
      "Built strong fundamentals in claim interpretation and patent landscape analysis",
    ],
    stack: ["Patent Search", "Landscape Analysis", "Technology Research"],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  notes?: string;
};

export const education: Education[] = [
  {
    degree: "M.Tech, Computer Science — CGPA 7.78",
    school:
      "Deenbandhu Chhotu Ram University of Science & Technology, Murthal (Sonepat)",
    location: "Sonepat, Haryana, India",
    start: "2015",
    end: "2017",
    notes:
      "Advanced Computer Science with focus on networks; published peer-reviewed papers on fuzzy-logic vertical handover schemes.",
  },
  {
    degree: "B.Tech, Computer Science — 73%",
    school: "Kurukshetra University",
    location: "Kurukshetra, Haryana, India",
    start: "2011",
    end: "2015",
    notes: "Foundations in computer science, networks, and software engineering.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Registered Patent Agent (IN/PA 4365)",
    issuer: "Indian Patent Office",
    issued: "Aug 2022",
  },
];

export const skills: Record<string, string[]> = {
  "Patent Practice": [
    "Patent Prosecution",
    "Claim Drafting",
    "Office Action Responses",
    "Patent Filing",
    "Patent Opposition",
  ],
  "Search & Analytics": [
    "Patentability Search",
    "Prior-Art Search",
    "Freedom-to-Operate",
    "Invalidity Search",
    "Patent Landscape Analysis",
  ],
  "Jurisdictions": ["EPO", "USPTO", "IP Australia", "Indian Patent Office", "CNIPA", "Bangladesh PO"],
  "Technology Domains": [
    "Computer Science",
    "Software & CIIs",
    "Electronics",
    "Telecommunications",
    "Networks",
  ],
  "Legal & Business": [
    "Legal Services",
    "Client Advisory",
    "Foreign Associate Coordination",
    "IP Strategy",
  ],
  "Tools": ["IP databases", "Patent search platforms", "Docketing systems"],
};

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

export const awards: Award[] = [];

export type Publication = {
  title: string;
  venue: string;
  date: string;
  description?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Effective Fuzzy Logic Based Vertical Handover Scheme for UMTS, WIMAX & WLAN Networks",
    venue: "IJCMS, Vol. 6 Issue 8, ISSN 2347-8527 (CDAC, Mumbai)",
    date: "Aug 2017",
    description:
      "Peer-reviewed paper on a fuzzy-logic vertical-handover scheme spanning UMTS, WiMAX, and WLAN networks.",
  },
  {
    title:
      "Combined Neuro-Fuzzy Vertical Handover Decision Criteria for LTE/LTE-A Networks",
    venue: "IJCMS, ISSN 2347-8527 (NITTTR, Chandigarh — MHRD, Govt. of India)",
    date: "Jun 2017",
    description:
      "Peer-reviewed paper proposing combined neuro-fuzzy criteria for LTE/LTE-A vertical handover decisions.",
  },
];

export type Testimonial = {
  name: string;
  title?: string;
  link?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [];

export const languages = ["English", "Hindi"] as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
] as const;
