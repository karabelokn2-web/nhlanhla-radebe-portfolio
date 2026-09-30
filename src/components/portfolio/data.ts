import cvAsset from "@/assets/Nhlanhla-Radebe-CV.pdf.asset.json";
import photoAsset from "@/assets/Nhlanhla-Radebe-Profile.jpg.asset.json";

export const profile = {
  name: "Nhlanhla Radebe",
  initials: "NR",
  subheading: "Short-Term Insurance | Claims | Customer Support",
  location: "Pretoria, Gauteng, South Africa",
  intro:
    "Short-Term Insurance professional with 3+ years of experience across claims administration, assessor support, customer service and stakeholder coordination.",
  about: [
    "I am a Short-Term Insurance professional with experience in claims processing, assessor support, customer communication and coordination with suppliers, brokers and internal teams. My experience has strengthened my ability to work accurately in high-volume environments, maintain confidential information, manage documentation and deliver professional customer service.",
    "I enjoy work where accuracy, communication and problem-solving directly contribute to a better customer experience.",
  ],
  email: "Karabelo.kn2@gmail.com",
  phone: "067 022 6600",
  phoneHref: "tel:+27670226600",
  linkedin: "https://www.linkedin.com/in/nhlanhla-radebe-346652199",
  github: "https://github.com/karabelokn2-web",
  cvUrl: cvAsset.url,
  photoUrl: photoAsset.url,
  photoAlt: "Nhlanhla Radebe - Short-Term Insurance Professional",
};

export const skillGroups = [
  {
    label: "Claims & Insurance",
    items: [
      "Claims Administration",
      "Claims Validation Support",
      "Policy & Claims Records",
      "Insurance Claims Systems",
      "Quality Assurance",
    ],
  },
  {
    label: "Customer & Stakeholders",
    items: [
      "Customer Service",
      "Stakeholder Engagement",
      "Problem Solving",
      "Process Improvement",
      "Time Management",
    ],
  },
  {
    label: "Administration & Data",
    items: [
      "Data Capturing",
      "Documentation & Record Keeping",
      "Data Privacy & Confidentiality",
      "CRM & Internal Systems",
      "Microsoft Office",
    ],
  },
  {
    label: "Digital",
    items: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "Git & GitHub"],
  },
];

export const experience = [
  {
    role: "Assessing Support Officer",
    company: "Telesure Investment Holdings (Auto & General)",
    location: "Midrand, GP",
    period: "April 2024 — March 2026",
    points: [
      "Supported customers and internal stakeholders in a high-volume claims environment.",
      "Maintained accurate claim, customer and process documentation.",
      "Updated internal systems with accurate claims and customer information.",
      "Coordinated with assessors, clients, service providers and internal departments.",
      "Responded to customer and stakeholder queries.",
      "Supported timely claim progression and maintained service standards.",
      "Handled confidential customer information in accordance with company policies and data privacy requirements.",
      "Managed multiple priorities while maintaining accuracy and attention to detail.",
    ],
  },
  {
    role: "Claims Consultant",
    company: "Brolink (Pty) Ltd",
    location: "Centurion, GP",
    period: "March 2022 — March 2024",
    points: [
      "Registered and processed personal and commercial motor insurance claims.",
      "Handled high volumes of inbound and outbound customer and stakeholder calls.",
      "Verified policy information and supporting documentation.",
      "Maintained electronic claim and policy records.",
      "Coordinated with suppliers, brokers and internal departments.",
      "Provided customers with updates throughout the claims process.",
      "Processed supplier payments according to company procedures and bordereaux requirements.",
      "Delivered professional customer service while meeting productivity and quality standards.",
    ],
  },
];

export const projects = [
  {
    kind: "Claims",
    title: "Insurance Claims Tracker",
    description:
      "A digital claims-tracking concept designed around real-world insurance administration workflows. It demonstrates how claim information, documentation status, stakeholder actions and progress can be organised in one interface.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    kind: "Customer Service",
    title: "Customer Query Management Dashboard",
    description:
      "A customer-service dashboard concept for logging queries, prioritising requests, recording actions and monitoring resolution. The project reflects experience working with customers and stakeholders in high-volume environments.",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"],
  },
  {
    kind: "Portfolio",
    title: "Professional Portfolio Website",
    description:
      "A responsive personal portfolio that brings together professional experience, skills, qualifications and project work into one platform that can be shared with potential employers.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub"],
  },
];

export const education = [
  {
    kind: "Qualification",
    title: "Short-Term Insurance Qualification, NQF Level 4",
    meta: "GIFS through Santam · March 2022 — March 2023",
    location: "Sandton, GP",
  },
  {
    kind: "Certificate",
    title: "National Certificate (Vocational): Office Administration, Level 3",
    meta: "Maluti TVET College · February 2019 — November 2021",
    location: "Harrismith, FS",
  },
];

export const leadership = [
  "Captain of Male Netball Team",
  "Class Representative",
  "SRC Member",
];
