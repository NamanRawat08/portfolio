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
      subtitle: "Distributed rate limiting, trading systems, and concurrency in practice",
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
      "Systems-minded software engineer who designs backend services around correctness under concurrency and reproducible data layers. Builds on Node.js, Express, PostgreSQL, and Redis, making shared-state checks atomic with Redis Lua scripts and database transactions, versioning schemas through migrations, and benchmarking trade-offs instead of assuming them. Grounded in DSA (250+ problems in Java), OS, DBMS, and Computer Networks.",
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
        "Redis Lua scripting",
      ],
    },
    {
      category: "Data & Persistence",
      skills: [
        "PostgreSQL",
        "Redis",
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
        "Rate limiting (token bucket, sliding window)",
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
        "Benchmarking",
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
      id: "redis-ratelimit-lab",
      title: "redis-ratelimit-lab: Distributed Rate Limiter",
      shortDescription:
        "Distributed rate limiter for Express using atomic Redis Lua scripts, benchmarking token bucket vs sliding window under bursts, races, and multi-instance load.",
      stack: ["Node.js", "Express.js", "Redis", "Lua", "autocannon"],
      featured: true,
      visualType: "rate-limiter",
      bullets: [
        "Built token bucket and sliding window limiters as Lua scripts that run inside Redis, so each read → check → write executes atomically even with many app servers sharing one Redis.",
        "Reproduced and fixed the race condition: 100 simultaneous requests across 5 connections against a limit of 10 got 100 through a naive GET/SET limiter and exactly 10 through the Lua limiter.",
        "Proved why the state must be shared: across 3 server instances, in-memory limiters let 30 requests through a limit of 10, while the Redis backend held the limit at 10.",
        "Benchmarked the trade-offs: both algorithms cost ~0.3 ms per check and ~7% HTTP throughput, but at a limit of 1,000 the sliding window log needs 108 KB per client versus 94 B for the token bucket, which in turn can allow up to 19 requests in a 10 s span.",
        "Hardened the middleware with Redis server time (clock-skew safe), TTLs on every key, RateLimit and Retry-After headers on 429s, and configurable fail-open or fail-closed behaviour when Redis is unreachable.",
      ],
      links: {
        github: "https://github.com/NamanRawat08/redis-ratelimit-lab",
        live: null,
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
        github: "https://github.com/NamanRawat08/Nexfolio",
        live: "TODO", // TODO: Add Nexfolio live demo URL
      },
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      shortDescription:
        "This site: a data-driven React SPA where every word lives in one content file, built for accessibility, reduced motion, and zero-config static deployment.",
      stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      featured: false,
      visualType: "static-site",
      bullets: [
        "Kept all copy, projects, and links in a single content module that the components render, so updating the site never means editing layout code.",
        "Built an accessible project dialog with a focus trap, Escape to close, and focus restored to the trigger, plus a skip link and scroll animations that respect reduced-motion settings.",
        "Implemented light and dark themes with CSS variables and a pre-paint script, so a returning visitor's saved theme loads without a flash.",
        "Added a validated contact form that posts to Formspree when configured and otherwise falls back to a pre-filled email draft.",
      ],
      links: {
        github: "https://github.com/NamanRawat08/portfolio",
        live: null,
      },
    },
  ],

  principles: [
    {
      id: "concurrency",
      title: "Correctness under Concurrency",
      subtitle: "Atomic Shared State",
      description:
        "Closing race conditions where state is shared: running read → check → write as a single atomic Lua script inside Redis, so concurrent app servers can never act on the same stale count.",
      appliedIn: "redis-ratelimit-lab",
    },
    {
      id: "measure",
      title: "Measure the Trade-offs",
      subtitle: "Benchmarks over Assumptions",
      description:
        "Choosing designs on evidence: reproducible race, multi-instance, latency, throughput, and memory benchmarks that show what each option actually costs before committing to one.",
      appliedIn: "redis-ratelimit-lab",
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
