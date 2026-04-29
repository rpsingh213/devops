/**
 * Single source of truth for portfolio content.
 * Sourced from LinkedIn profile: https://www.linkedin.com/in/ravipsingh123
 *
 * Edit this file to update any text, role, project, or skill on the site.
 */

export const profile = {
  name: "Ravi Pratap Singh",
  shortName: "Ravi",
  headline: "Domain Solution Expert @ Amdocs • Java • Telecom BSS",
  tagline:
    "Translating business problems into technical solutions — APIs, IDDs, and grooming JIRA backlogs for global Telecom BSS programs, accelerated with GenAI & Copilot.",
  location: "Gurugram, Haryana, India",
  totalExperience: "13+ years",
  email: "ravipratap@outlook.com",
  mediumUrl: "https://ravipsingh13.medium.com/",
  social: {
    linkedin: "https://www.linkedin.com/in/ravipsingh123",
    github: "https://github.com/",
    twitter: "",
    email: "mailto:ravipratap@outlook.com",
  },
  about: `Seasoned Domain Solution Expert, Java practitioner, Agile leader, and Telecom BSS specialist with 13+ years of hands-on delivery experience at Amdocs.

I now operate at the intersection of business and engineering — analyzing customer requirements, shaping product customizations, designing APIs and IDDs, and grooming JIRA backlogs that development teams can execute against. Earlier, I led cross-functional Scrum teams across India and the Philippines, designed microservice solutions, and shipped large, mission-critical features for Tier-1 telecom operators in South-East Asia.

I am passionate about mentoring engineers, breaking silos between teams, and turning ambiguous problems into shippable increments. I lean heavily on GenAI and Copilot to accelerate solutioning and SDLC activities. Recognized with Amdocs' Leadership Award for delivering complex programs under tight timelines.`,
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
    company: "Amdocs",
    role: "Domain Solution Expert",
    location: "Gurugram, Haryana, India (On-site)",
    start: "Feb 2026",
    end: null,
    duration: "Present",
    description:
      "Convert customer business needs into shippable technical solutions — analyzing requirements, designing APIs and IDDs, and grooming JIRA backlogs that development teams can execute against.",
    highlights: [
      "Business analysis — identify customer requirements and shape how they can be achieved through product customization",
      "Analyze requirements and share high-level solutions and effort estimations with stakeholders",
      "Author Impact Assessment and solutioning documents for proposed changes",
      "Design APIs for inter-system interfacing — ensuring loose coupling and reusability",
      "Create IDDs (Interface Design Documents) for new and customized APIs delivered as part of solutions",
      "Walk customers through solutions, gather feedback, iterate, finalize, and obtain formal approvals",
      "Groom the backlog for development teams — create EPICs, Features, and User Stories in JIRA aligned with the solution design",
      "Apply GenAI and Copilot across solutioning and SDLC activities to accelerate delivery and improve quality",
    ],
    stack: [
      "Solution Design",
      "Business Analysis",
      "API Design",
      "IDD Authoring",
      "JIRA",
      "EPICs / Features / User Stories",
      "Effort Estimation",
      "GenAI",
      "GitHub Copilot",
    ],
  },
  {
    company: "Amdocs",
    role: "Software Development Implementation Team Lead",
    location: "Gurugram, Haryana, India",
    start: "Sep 2024",
    end: "Feb 2026",
    duration: "1 yr 5 mos",
    description:
      "Led cross-functional Scrum team and assisted the solution team in designing the right solutions for global telecom customers.",
    highlights: [
      "Drove solutioning, IA reviews, design, technical assessments, and effort estimation in close partnership with BAs and POs for EPICs",
      "Owned end-to-end delivery: development, UT/ST/UAT, production readiness, deployment, and post-go-live stabilization",
      "Mentored engineers and removed cross-team blockers to keep sprint velocity and quality high",
    ],
    stack: ["Java", "REST", "SOAP", "Microservices", "Scrum", "Agile", "Telecom BSS"],
  },
  {
    company: "Amdocs",
    role: "Software Development Implementation Team Lead",
    location: "Philippines",
    start: "Sep 2022",
    end: "Sep 2024",
    duration: "2 yrs",
    description:
      "Led a 7-engineer Java development & implementation Scrum team designing, building, testing, and deploying Java code and catalog/business data implementations for a major Philippines telco.",
    highlights: [
      "Acted as Scrum Master for the cross-functional team, owning ceremonies, capacity planning, and impediment removal",
      "Led code reviews and complex defect triage discussions; designed APIs and MTV-based solutions in collaboration with the solution team and Product Owner",
      "Mentored team members on Java craftsmanship, design patterns, and career growth",
    ],
    stack: ["Java", "REST APIs", "Scrum Master", "MTV Solutioning", "Code Review"],
  },
  {
    company: "Amdocs",
    role: "Software Development Team Lead",
    location: "Gurgaon, India",
    start: "Jul 2019",
    end: "Aug 2022",
    duration: "3 yrs 1 mo",
    description:
      "Led and mentored a 10-member team of software engineers and system analysts delivering software for major South-East Asia telecom service providers (Malaysia & Philippines).",
    highlights: [
      "Delivered a complex project end-to-end during the 2020 pandemic under WFH conditions — successfully deployed to production",
      "In 2021, delivered a high-stakes program for a Malaysian operator with the team running at 150% velocity against very strict timelines",
      "Hands-on with REST, SOAP, EJBs, and complex business logic in core Java; supported testing streams from functional tests through UAT and production stabilization",
    ],
    stack: ["Java", "EJB", "REST", "SOAP", "Scrum", "Telecom"],
  },
  {
    company: "Amdocs",
    role: "Senior Software Developer",
    location: "Gurgaon, India",
    start: "Jan 2015",
    end: "Jun 2019",
    duration: "4 yrs 5 mos",
    description:
      "Worked in software development in the telecom domain using EJBs, Java, and SOAP/REST web services within Scrum and Agile delivery models.",
    highlights: [
      "Strong hands-on with Rally, Maven, Sonar, JProfiler, and SoapUI for development, profiling, and automation",
      "Closely interacted with and led the team across software development and defect-fixing cycles",
      "Continuously explored and adopted newer technologies to improve day-to-day delivery",
    ],
    stack: ["Java", "EJB", "SOAP", "REST", "Maven", "SonarQube", "JProfiler", "SoapUI"],
  },
  {
    company: "Amdocs",
    role: "Software Developer",
    location: "Gurgaon, India",
    start: "Mar 2013",
    end: "Jan 2015",
    duration: "1 yr 10 mos",
    description:
      "Started career as a Software Developer building telecom-domain features and gaining deep grounding in Java, EJBs, and large-scale enterprise delivery.",
    stack: ["Java", "EJB", "SQL"],
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
    degree: "Diploma in Advanced Computing (PG-DAC) — Grade A+",
    school: "Centre for Development of Advanced Computing (CDAC), Pune",
    location: "Pune, Maharashtra, India",
    start: "2012",
    end: "2013",
    notes:
      "C++, Java, Oracle, MySQL, OOP, debugging & refactoring under industry mentors.",
  },
  {
    degree: "B.Tech, Computer Science and Engineering — CGPA 8.0",
    school: "Maharishi Markandeshwar (Deemed to be University)",
    location: "Mullana, Ambala, Haryana, India",
    start: "2008",
    end: "2012",
    notes:
      "Computer networks, OS, web technologies, C, C++, Java; Art of Living, Bike Riders.",
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
    name: "Business Analysis Fundamentals (IIBA endorsed)",
    issuer: "Udemy",
    issued: "Aug 2025",
    url: "https://amdocsglobal.udemy.com/certificate/UC-6bee1552-af28-47b6-8fcb-b72280d40de0/",
  },
  {
    name: "Practical Leadership Skills",
    issuer: "Udemy",
    issued: "Aug 2023",
  },
  {
    name: "Professional Scrum Master I (PSM1)",
    issuer: "Scrum.org",
    issued: "Feb 2022",
    url: "https://credly.com/badges/4779f902-fd2c-4b06-8bbd-3818101dcab3/public_url",
  },
  {
    name: "Characteristics of a Great Scrum Master",
    issuer: "LinkedIn Learning",
    issued: "Jul 2021",
    url: "https://linkedin.com/learning/certificates/6e7107715ad2dd55f110d185824fe556394e605a4ba4d16c3dd0d870a8b071a7",
  },
  {
    name: "Software Architecture: Breaking a Monolith into Microservices",
    issuer: "LinkedIn Learning",
    issued: "Jul 2021",
    url: "https://linkedin.com/learning/certificates/4a7743f4be20489800729d4c9ea71c74f0d6c88acb86a29d3f4bdf32f03f13a9",
  },
  {
    name: "GATE — Computer Science",
    issuer: "Indian Institute of Technology, Madras",
    issued: "Dec 2011",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Java", "SQL", "JavaScript"],
  "Backend & APIs": ["REST", "SOAP", "EJB", "Microservices", "Web Services"],
  "Tools & Frameworks": ["Maven", "JProfiler", "SonarQube", "SoapUI", "Rally", "Git"],
  "Practices": [
    "Agile",
    "Scrum",
    "Large-Scale Scrum (LeSS)",
    "SDLC",
    "Code Review",
    "Effort Estimation",
    "Defect Management",
  ],
  "Leadership": [
    "Team Leadership",
    "Mentoring",
    "Cross-functional Collaboration",
    "Stakeholder Management",
    "Scrum Master",
    "Product Owner",
  ],
  "Domain": ["Telecom BSS", "OMS", "Catalog & Business Data", "MTV Solutioning"],
};

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

export const awards: Award[] = [
  {
    title: "Leadership Award",
    issuer: "Amdocs Classic Delivery Management",
    date: "Sep 2023",
    description:
      "Recognized for outstanding leadership, delivery ownership, and team mentoring across multi-geography programs.",
  },
];

export type Testimonial = {
  name: string;
  title?: string;
  link?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Salman Shaikh",
    link: "https://www.linkedin.com/in/drsalmanshaikh",
    quote:
      "Ravi is an excellent professional with deep OMS knowledge. He handles all issues with a very positive approach, breaks silos, and drives open ends to closure. He is a goto person for any issue! His leadership skills are commendable.",
  },
  {
    name: "Sahil Kalra",
    link: "https://www.linkedin.com/in/sahilkalrait",
    quote:
      "Ravi is a great friend and a great person by heart. What I admire most is that he is determined towards his goals while staying positive about the fun aspects of life. He learns at a rapid pace, is very helpful and kind, and will definitely succeed in different roles in his organization.",
  },
];

export const languages = ["English", "Hindi", "Punjabi"] as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
