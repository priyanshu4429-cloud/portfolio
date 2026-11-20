export interface Project {
  id: string;
  title: string;
  type: string;
  badge: string;
  summary: string;
  myContribution: string;
  attributionNote: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: "In Development" | "Completed" | "Hackathon Finalist" | "Delivered";
}

export interface Contribution {
  id: string;
  project: string;
  role: string;
  title: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  role: string;
  scope: string;
  summary: string;
  points: string[];
  status: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; context: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Priyanshu Kumar",
    role: "Developer | AI Builder | Aspiring Founder",
    location: "West Bengal, India",
    educationBrief: "B.Tech in Computer Science & Engineering (2nd Year), MCKV Institute of Engineering",
    email: "priyanshu4429@gmail.com",
    phone: "+91 7367805791",
    github: "https://github.com/priyanshu4429-cloud",
    linkedin: "https://www.linkedin.com/in/priyanshu-mehta-58959834b/",
    tagline: "Building thoughtful interfaces for ambitious ideas.",
    bio: "I am a second-year Computer Science and Engineering student at MCKV Institute of Engineering, focused on frontend engineering, AI-assisted product development, and disciplined software craftsmanship. I believe in honest attribution, reliable interfaces, and turning emerging technologies into tangible tools.",
    stats: [
      { label: "Academic Standing", value: "B.Tech CSE (2nd Year)" },
      { label: "National Hackathon", value: "SIH 2026 Grand Finale" },
      { label: "Core Focus", value: "Frontend & AI Systems" },
    ],
  },

  education: {
    institution: "MCKV Institute of Engineering",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    year: "Second Year (In Progress)",
    location: "West Bengal, India",
    overview:
      "Balancing academic rigor in core computer science disciplines with hands-on, collaborative software building and hackathon participation.",
    disciplines: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems",
      "Computer Architecture & Web Systems",
    ],
  },

  skills: [
    {
      title: "Frontend Engineering",
      description: "Crafting fast, accessible, responsive user interfaces with strict type safety and modern conventions.",
      skills: [
        { name: "React", context: "Primary library for interactive UI and dashboard engineering" },
        { name: "TypeScript", context: "Applied for compile-time safety and self-documenting architectures" },
        { name: "Next.js", context: "Utilized for optimized SSR, SSG, routing, and modern full-stack web apps" },
        { name: "Tailwind CSS", context: "Token-driven utility styling, glassmorphism, and responsive layouts" },
        { name: "HTML5 & Semantic Web", context: "Accessible DOM structuring with WCAG 2.2 AA adherence" },
        { name: "CSS3 & Animations", context: "Hardware-accelerated transforms, layout stability, and fluid spacing" },
      ],
    },
    {
      title: "AI & Automation Pipelines",
      description: "Leveraging generative models and programmatic automation to synthesize workflows and rapid prototypes.",
      skills: [
        { name: "AI Tooling & LLM Workflows", context: "Leveraged for prompt design, code acceleration, and demo generation" },
        { name: "Pipeline Architecture", context: "Structured data parsing, transformation, and automated staging" },
        { name: "API Integration", context: "Connecting client applications to cloud endpoints and intelligence services" },
        { name: "Rapid Prototyping", context: "Accelerating conceptual product designs into interactive digital tools" },
      ],
    },
    {
      title: "Engineering Practices & Systems",
      description: "Collaborative version control, structured data pipelines, and adherence to transparent engineering.",
      skills: [
        { name: "Git & GitHub", context: "Multi-branch teamwork, pull requests, issue tracking, and repository hygiene" },
        { name: "RESTful Contracts", context: "Consuming and structuring robust client-server interfaces" },
        { name: "Data Ingestion & Normalization", context: "Demonstrated in TrustTrace Worker 02 threat intelligence pipeline" },
        { name: "Responsive & Accessible Design", context: "Delivering universal usability across mobile, tablet, and desktop" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "ai-agency-automation",
      title: "AI Agency Automation Platform",
      type: "Personal Startup / Product",
      badge: "In Development",
      summary:
        "An in-development personal product exploring AI-assisted business lead discovery, automated website demo synthesis, and outreach/CRM staging workflows.",
      myContribution:
        "Solo product architect and developer. Conceptualized and engineered the end-to-end interface, demo generation pipeline, and mock CRM coordination.",
      attributionNote:
        "Personal exploration in active development. Presented honestly as an engineering product prototype without claims of revenue, paying customers, or commercial scale.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs", "Automation"],
      repositoryUrl: "https://github.com/priyanshu4429-cloud/ai-agency-automation-platform",
      demoUrl: "https://ai-agency-automation-platform-a.vercel.app/demo/the-perfect-image-medspa-mscf8mow",
      featured: true,
      status: "In Development",
    },
    {
      id: "veyra-sentinel",
      title: "Veyra Sentinel",
      type: "Collaborative Project",
      badge: "SIH 2026 Grand Finale",
      summary:
        "A predictive intelligence and forecasting dashboard engineered for proactive telemetry monitoring, anomaly visualization, and time-series assessment.",
      myContribution:
        "Frontend Developer: Built the complete responsive frontend web application using React and TypeScript, implementing interactive data visualizations and user telemetry views.",
      attributionNote:
        "Collaborative hackathon submission. Priyanshu led frontend engineering; backend services, data architecture, and machine learning model training were executed by team collaborators.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Telemetry Visualizations"],
      repositoryUrl: "https://github.com/priyanshu4429-cloud/veyra",
      demoUrl: "https://veyra-201-chi.vercel.app",
      featured: true,
      status: "Hackathon Finalist",
    },
    {
      id: "trusttrace",
      title: "TrustTrace",
      type: "Collaborative Project",
      badge: "Cybersecurity Intelligence",
      summary:
        "A collaborative cybersecurity platform engineered for digital trust verification, web threat detection, and distributed evidence telemetry.",
      myContribution:
        "Worker 02 Pipeline Engineer: Implemented evidence ingestion pipelines, data normalization schemas, persistence layers, and RESTful contract integrations.",
      attributionNote:
        "Collaborative multi-engineer project. Priyanshu specifically authored Worker 02; core heuristic models and other microservices were designed by project collaborators.",
      technologies: ["REST APIs", "Data Ingestion", "Normalization Engine", "Python / JSON"],
      repositoryUrl: "https://github.com/Anisha-Dubey/trusttrace",
      featured: true,
      status: "Completed",
    },
    {
      id: "rk-traders",
      title: "R K Traders",
      type: "Client Website Project",
      badge: "Commercial Client",
      summary:
        "A tailored business showcase and digital presence built for an active commercial trading firm, emphasizing clarity and mobile accessibility.",
      myContribution:
        "Sole Web Developer: Structured the website layout, content hierarchy, and responsive styling to modern web standards.",
      attributionNote:
        "Client website project. In adherence to strict factual integrity and client privacy, unverified internal business metrics and proprietary details are omitted.",
      technologies: ["HTML5", "Modern CSS", "JavaScript", "Responsive UI"],
      featured: false,
      status: "Delivered",
    },
  ] as Project[],

  contributions: [
    {
      id: "veyra-frontend",
      project: "Veyra Sentinel",
      role: "Frontend Engineer (React & TypeScript)",
      title: "Predictive Analytics UI & Real-Time Telemetry Views",
      summary:
        "Delivered a fluid, high-density dashboard interface converting complex time-series predictions into actionable visual components.",
      highlights: [
        "Crafted reusable dashboard widgets with strict TypeScript interfaces for clean telemetry binding.",
        "Ensured responsive rendering across both mobile screens and wide monitoring displays.",
        "Collaborated tightly with backend and ML teammates to consume model predictions seamlessly.",
      ],
      technologies: ["React", "TypeScript", "CSS Modules / Tailwind", "Vite"],
    },
    {
      id: "trusttrace-worker02",
      project: "TrustTrace",
      role: "Worker 02 Systems Engineer",
      title: "Evidence Ingestion, Normalization & Persistence Pipeline",
      summary:
        "Engineered the ingestion engine tasked with consuming raw threat indicators and converting them into normalized data models.",
      highlights: [
        "Designed schema normalization logic to reconcile discordant threat payloads into structured records.",
        "Implemented reliable persistence mechanisms and validated API endpoints for downstream consumers.",
        "Maintained clean separation of concerns within a multi-contributor cybersecurity repository.",
      ],
      technologies: ["REST APIs", "Data Ingestion", "Persistence Layer", "Schema Normalization"],
    },
    {
      id: "agency-automation-engine",
      project: "AI Agency Automation Platform",
      role: "Product Developer & Architect",
      title: "Dynamic Demo Generation & Workflow Staging",
      summary:
        "Built modular interface components enabling instant synthesis of personalized website demonstrations for target prospects.",
      highlights: [
        "Engineered client-side presentation states for automated lead analysis and preview workflows.",
        "Structured modular UI blocks allowing rapid adaptation for varying business niches.",
        "Architected clean, accessible navigation through complex multi-step automation flows.",
      ],
      technologies: ["Next.js", "TypeScript", "AI API Connectors", "Tailwind CSS"],
    },
  ] as Contribution[],

  achievements: [
    {
      id: "sih-2026",
      title: "Smart India Hackathon (SIH) 2026 — Grand Finale",
      event: "Smart India Hackathon 2026",
      role: "Frontend Developer (Team Veyra)",
      scope: "National Level Hackathon",
      status: "Top 30 Selection Nationally & Grand Finale Finalist",
      summary:
        "Selected among the Top 30 teams nationally from thousands of submissions to compete in the Grand Finale of Smart India Hackathon 2026 with Team Veyra.",
      points: [
        "Recognized at the national level for developing Veyra Sentinel's predictive intelligence platform.",
        "Successfully represented the team's frontend architecture and user experience during national evaluations.",
        "Collaborated under intense hackathon sprint deadlines to deliver a fully operational, integrated product.",
      ],
    },
  ] as Achievement[],
};

