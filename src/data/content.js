/**
 * SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT.
 * Contains only verified facts from the candidate profile.
 * Unresolved links or assets are tagged with explicit TODO comments and placeholders.
 */

export const personalData = {
  identity: {
    name: "Naman Rawat",
    title: "Software Engineer (Backend-focused) | B.E. Computer Science candidate, 2027",
    tagline: "I build backend systems that stay correct under load.",
    email: "namanraw619@gmail.com",
    phone: "+91-9999596885",
    github: "https://github.com/NamanRawat08",
    linkedin: "https://linkedin.com/in/naman-rawat",
    leetcode: "TODO", // TODO: Add LeetCode profile URL
    resumeUrl: "/Naman_Rawat_Resume.pdf",
    avatar: "/naman-rawat.jpg",
  },

  sections: {
    about: {
      title: "About Me",
      subtitle: "Focus on correctness, concurrency, and robust data layers",
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Core technologies, architectures, and engineering tools",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Production architectures, state machines, and concurrency solutions",
    },
    principles: {
      title: "How I Build",
      subtitle: "Engineering principles grounded in real project trade-offs",
    },
    education: {
      title: "Education & Achievements",
      subtitle: "Academic performance, DSA milestones, and code verification rigor",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Open to SWE/SDE backend opportunities and distributed systems challenges",
      intro: "Whether you have questions about my projects, want to discuss system design, or have an engineering opening, feel free to drop a message or reach out directly.",
    },
  },

  summary: {
    paragraph:
      "Systems-minded software engineer who designs backend services around correctness under concurrency, real-time event delivery, and reproducible data layers. Builds on Node.js, PostgreSQL, Prisma, and Socket.IO, modelling workflows as state machines, enforcing consistency with atomic transactions, and versioning schemas through migrations. Grounded in DSA (250+ problems in Java), OS, DBMS, and Computer Networks.",
  },

  quickFacts: [
    { label: "Academic Standing", value: "CGPA 8.51", detail: "no backlogs" },
    { label: "Algorithms", value: "250+ DSA", detail: "solved in Java" },
    { label: "Production Experience", value: "3 Projects", detail: "shipped & maintained" },
    { label: "Degree & Institution", value: "B.E. CSE", detail: "Chitkara University, 2027" },
  ],

  skills: [
    {
      category: "Languages",
      skills: ["Java", "C++", "Python", "JavaScript", "SQL"],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful service design",
        "Socket.IO (WebSocket event streaming)",
        "Prisma ORM",
      ],
    },
    {
      category: "Data & Persistence",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Relational schema design",
        "ACID transactions",
        "Versioned migrations (node-pg-migrate)",
      ],
    },
    {
      category: "Systems Concepts",
      skills: [
        "Concurrency & race conditions",
        "State machines",
        "Data consistency",
        "Process scheduling",
        "Networking fundamentals",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, RDS)", "Docker", "Git/GitHub", "CI/CD fundamentals"],
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS"],
    },
    {
      category: "Practices & AI Tools",
      skills: [
        "Agile",
        "Code review",
        "Debugging",
        "Testing",
        "Technical documentation",
        "GitHub Copilot",
        "Cursor",
        "Claude",
        "ChatGPT",
        "Google Antigravity",
      ],
    },
  ],

  projects: [
    {
      id: "noush",
      title: "Noush: Event-Driven E-Commerce Backend",
      shortDescription:
        "Event-driven e-commerce backend enforcing order state transitions via finite state machines and preventing overselling with atomic Prisma transactions.",
      stack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Socket.IO", "React"],
      featured: true,
      visualType: "state-machine",
      bullets: [
        "Modelled the order lifecycle as a server-enforced finite state machine (pending → confirmed → shipped → delivered), rejecting invalid transitions and streaming each state change to clients over Socket.IO.",
        "Solved the concurrent-checkout race condition by executing stock decrement and order creation inside a single atomic Prisma transaction, so both commit or both roll back, with no overselling.",
        "Translated the founder's operational workflows into success metrics and system requirements for a merchandising and restock-analytics module.",
        "Leading the re-architecture from a single-vendor MVP to a multi-vendor marketplace, defining the tenant data model and service boundaries before writing code.",
      ],
      links: {
        github: "TODO", // TODO: Add Noush GitHub repository link
        live: "TODO", // TODO: Add Noush live demo URL
      },
    },
    {
      id: "nexfolio",
      title: "Nexfolio: Stock Trading Simulation Platform",
      shortDescription:
        "Zerodha-inspired paper-trading system with virtual funds, reproducible schema migrations via node-pg-migrate, and strict pre-merge AI code review.",
      stack: ["Node.js", "Express.js", "PostgreSQL (pg)", "React", "Tailwind CSS"],
      featured: true,
      visualType: "three-tier",
      bullets: [
        "Building a Zerodha-inspired paper-trading system (virtual funds) as a three-tier architecture: React client, Express REST API layer, and PostgreSQL persistence via node-postgres.",
        "Treating the database schema as code with node-pg-migrate versioned migrations, giving deterministic, reproducible, and reviewable schema state across environments.",
        "Delivering a responsive dark-themed trading dashboard with separate mobile and desktop layouts.",
        "Shipping through feature branches and squash-merged PRs, with AI-generated code (Google Antigravity, Claude) passed through a mandatory human-review gate.",
      ],
      links: {
        github: "TODO", // TODO: Add Nexfolio GitHub repository link
        live: "TODO", // TODO: Add Nexfolio live demo URL
      },
    },
    {
      id: "resume-builder",
      title: "Resume Builder",
      teamNote: "Team project (2 developers)",
      shortDescription:
        "Collaborative resume management service providing CRUD REST endpoints backed by MongoDB document storage with locked-down API contracts.",
      stack: ["React", "Node.js", "MongoDB"],
      featured: false,
      visualType: null,
      bullets: [
        "Built a resume management service exposing CRUD REST endpoints over a MongoDB document store, with a React client.",
        "Split frontend and backend ownership with a teammate and used PR reviews to lock down API contracts and catch integration defects early.",
      ],
      links: {
        github: "TODO", // TODO: Add Resume Builder GitHub repository link
        live: null,
      },
    },
  ],

  principles: [
    {
      id: "concurrency",
      title: "Correctness under Concurrency",
      subtitle: "Atomic Transactions",
      description:
        "Eliminating race conditions at the database boundary by executing dependent operations—such as inventory decrements and order generation—inside atomic ACID transactions that commit or roll back as an indivisible unit.",
      appliedIn: "Noush",
    },
    {
      id: "state-machines",
      title: "State Machines for Workflows",
      subtitle: "Server-Enforced Transitions",
      description:
        "Modelling business lifecycles as strict finite state machines at the service layer to mathematically reject illegal state transitions and broadcast verified domain events in real time via WebSockets.",
      appliedIn: "Noush",
    },
    {
      id: "schema-as-code",
      title: "Schema as Code",
      subtitle: "Versioned Migrations",
      description:
        "Treating relational database schemas as version-controlled, auditable code with programmatic migrations, guaranteeing deterministic and reproducible database state across developer machines and production.",
      appliedIn: "Nexfolio",
    },
  ],

  education: [
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "Chitkara University",
      period: "2023 – 2027",
      grade: "CGPA 8.51",
      badge: "Current Degree",
    },
    {
      degree: "Class XII",
      institution: "Delhi Board",
      period: "2022 – 2023",
      grade: "72%",
      badge: "Senior Secondary",
    },
    {
      degree: "Class X",
      institution: "Delhi Board",
      period: "2020 – 2021",
      grade: "89%",
      badge: "Secondary",
    },
  ],

  achievements: [
    {
      title: "250+ DSA Problems Solved",
      description:
        "Solved 250+ Data Structures & Algorithms problems in Java across LeetCode and the Striver A2Z DSA Sheet.",
      highlight: "Java / LeetCode / Striver A2Z",
    },
    {
      title: "AI Code Review & Security Gate",
      description:
        "Caught and fixed a functional bug and a security vulnerability in AI-generated code during pre-merge review of a full-stack project.",
      highlight: "Human-in-the-loop SWE",
    },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Principles", href: "#principles" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  footer: {
    builtWith: "Built with React + Tailwind CSS",
  },
};
