import React, { useEffect, useMemo, useState } from "react";
import profile from "./assets/avatar.png";
import "./App.css";

export default function App() {
  const PROFILE = useMemo(
    () => ({
      name: "Prashant Pandey",
      headline: "Senior Frontend Developer | React • Next.js • TypeScript • JavaScript • React Query • Redux",
      summary:
        "Senior Frontend Developer with 5+ years of professional experience building enterprise-grade web applications using React, Next.js, and TypeScript. Specialized in admin dashboards, role-based UI systems, operational data views, complex tables, filters, drill-downs, charting, real-time communication features (WebSocket, Agora SDK), and performance-focused frontend architecture. Experienced in REST API integration, secure route guards, permission-based access, real-time polling, SSR/SEO concepts in Next.js, and scalable UI development with Redux, MUI, Ant Design, and Tailwind CSS.",
      location: "Greater Noida, India",
      experience: "5+ years experience",
      highlights: ["React", "Next.js", "TypeScript"],
      links: {
        email: "mailto:prashantpandey4650@gmail.com",
        linkedin: "https://linkedin.com/in/prashantpandey87",
        github: "https://github.com/prashantpandey87",
        resume: "https://drive.google.com/file/d/1htFJP3LOWXmWGU9n3w9D9rv4HWx53RPh/view?usp=sharing",
      },
    }),
    []
  );

  const NAV = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const SKILLS = useMemo(
    () => [
      {
        title: "Languages",
        items: ["TypeScript", "JavaScript (ES6+)"],
      },
      {
        title: "Frameworks & Libraries",
        items: ["ReactJS", "NextJS", "Redux", "React Router DOM", "Axios"],
      },
      {
        title: "State Management",
        items: ["Redux", "React Query", "React Context API"],
      },
      {
        title: "Forms & Validation",
        items: ["React Hook Form", "Formik", "Yup", "Zod"],
      },
      {
        title: "Charting & Data Viz",
        items: ["Recharts", "Chart.js"],
      },
      {
        title: "Design Systems & UI",
        items: ["Material UI (MUI)", "Ant Design", "Bootstrap", "Tailwind CSS"],
      },
      {
        title: "Auth & Security",
        items: ["OAuth2", "JWT", "Route Guards", "RBAC Patterns"],
      },
      {
        title: "Tools & Integration",
        items: ["Git", "GitHub", "Bitbucket", "Jira", "REST APIs", "WebSockets", "Polling", "SSE", "Agora SDK", "Firebase", "HLS.js"],
      },
      {
        title: "AI/LLM Tools",
        items: ["OpenAI", "ChatGPT", "Claude Code", "Codex", "MCP"],
      },
    ],
    []
  );

  const EXPERIENCE = useMemo(
    () => [
      {
        role: "Senior Frontend Developer",
        company: "Deep TechnoServices LLP",
        meta: "05/2026 – Present",
        tags: ["Next.js", "Agora SDK", "WebSocket", "Firebase", "TanStack Query", "Zod", "Redux", "Tailwind CSS"],
        bullets: [
          "Developed real-time communication features using Agora SDK for audio/video calling and WebSocket for live chat and notifications.",
          "Integrated Firebase for social login (authentication) and push notifications.",
          "Built and maintained scalable frontend applications using Next.js with a focus on performance and responsive design using Tailwind CSS.",
          "Implemented data fetching, caching, and synchronization using TanStack Query, and managed complex application state with Redux.",
          "Implemented form handling and schema-based validation using Zod to ensure data integrity across workflows.",
          "Integrated frontend with backend services via REST APIs to support dynamic data rendering and real-time interactions.",
          "Collaborated with backend and product teams to deliver reliable, low-latency real-time features.",
        ],
      },
      {
        role: "Frontend Engineer",
        company: "Wipro Limited",
        meta: "09/2021 – 03/2026 · Noida, UP (Hybrid)",
        tags: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "MUI", "Tailwind CSS"],
        bullets: [
          "Built and maintained enterprise-grade web applications using React.js, Next.js, JavaScript, and TypeScript with a focus on performance, scalability, and clean UI architecture.",
          "Developed reusable, modular UI components for dashboards, forms, tables, filters, and data-driven workflows.",
          "Integrated frontend with backend services using REST APIs and Axios to support dynamic data rendering, authentication flows, and user interactions.",
          "Implemented form handling, validation, and state management for complex workflows using Redux, React Query, and validation libraries.",
          "Optimized rendering performance using memoization techniques to reduce unnecessary re-renders and improve UI responsiveness.",
          "Worked on route guards, JWT-based authentication, and permission-based UI rendering for secure application access.",
          "Collaborated with backend developers, QA teams, and stakeholders to deliver end-to-end features with reliable data flow.",
          "Debugged UI issues, improved layouts, and ensured responsive behavior across browsers and screen sizes.",
        ],
      },
    ],
    []
  );

  const PROJECTS = useMemo(
    () => [
      {
        title: "Astroscience",
        meta: "Deep TechnoServices LLP · 05/2026 – Present · Senior Frontend Developer",
        links: [],
        bullets: [
          "Developed and maintained a scalable astrology platform using Next.js (App Router) and TypeScript.",
          "Implemented API integration, caching, and server state management using TanStack Query (React Query).",
          "Built reusable, responsive UI components with Tailwind CSS, ensuring a seamless experience across desktop and mobile devices.",
          "Integrated dynamic modules including Janam Kundali, Varshphal, Bhajan & Mantra, Baby Name Generator, Matchmaking, and Predictions.",
          "Implemented WebSocket for real-time communication and live data updates across the application.",
          "Integrated the Agora SDK to enable real-time audio and video calling features with channel management and call lifecycle handling.",
          "Used HLS.js for adaptive video streaming and media playback.",
          "Optimized application performance using lazy loading, code splitting, and efficient API caching.",
          "Improved SEO and media performance using Next.js rendering strategies and next/image optimization.",
          "Collaborated with backend engineers to integrate REST APIs, troubleshoot production issues, and deliver features in an Agile environment.",
        ],
        tags: ["Next.js (App Router)", "TypeScript", "React Query", "Tailwind CSS", "WebSocket", "Agora SDK", "HLS.js", "REST APIs"],
      },
      {
        title: "Masterverses Platform",
        meta: "Wipro Limited · 02/2024 – 03/2026 · Frontend Developer",
        links: [],
        bullets: [
          "Developed frontend components for a platform focused on content discovery, events, and user engagement.",
          "Designed dynamic UI components to support event browsing, content exploration, and user dashboard workflows.",
          "Integrated frontend with backend services to fetch and display platform data, including events, user activities, and engagement features.",
          "Connected the application with REST APIs to manage workflows related to content display, user interactions, and activity tracking.",
          "Implemented reusable components to present content feeds, user progress, and interaction status.",
          "Collaborated with backend teams to ensure smooth data flow and a consistent user experience across the platform.",
        ],
        tags: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs"],
      },
      {
        title: "Data Migration Platform",
        meta: "Wipro Limited · 11/2021 – 11/2023 · Frontend Developer",
        links: [],
        bullets: [
          "Developed frontend components for a data migration platform used to transfer data from multiple databases to Google BigQuery.",
          "Built responsive UI using React.js to allow users to configure and monitor migration jobs.",
          "Integrated frontend with backend services using REST APIs to fetch migration status and job details.",
          "Implemented reusable components to display database sources, migration progress, and logs.",
          "Improved user experience by creating dynamic forms for selecting source databases and migration parameters.",
          "Collaborated with backend and data engineering teams to ensure smooth data pipeline monitoring.",
        ],
        tags: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs"],
      },
      {
        title: "InfluencerAI Platform",
        meta: "Personal Project · Frontend Developer",
        links: [],
        bullets: [
          "Developed frontend components for an AI-based influencer platform that generates and publishes content automatically on Instagram.",
          "Designed dynamic UI components to handle content creation, preview, and automated posting workflows.",
          "Connected frontend with backend services using REST APIs to fetch generated media, manage workflows, and trigger publishing.",
          "Implemented reusable components to display AI characters, generated videos, and publishing status.",
        ],
        tags: ["React.js", "TypeScript", "REST APIs", "Generative AI"],
      },
    ],
    []
  );

  const EDUCATION = useMemo(
    () => [
      {
        title: "M.Tech",
        meta: "Birla Institute of Technology And Science, Pilani (BITS Pilani) · 2021 – 2025 · Online Learning",
      },
      {
        title: "Bachelor of Computer Application",
        meta: "GLA University, Mathura · 2018 – 2021",
      },
      {
        title: "Intermediate",
        meta: "Adarsh Inter College, Mathura · 2018",
      },
      {
        title: "High School",
        meta: "Adarsh Inter College, Mathura · 2016",
      },
    ],
    []
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToId = (id, { replaceHash = false } = {}) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Keep section headings visible under sticky header.
    const headerOffset = 86;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });

    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      const fn = replaceHash ? "replaceState" : "pushState";
      window.history[fn](null, "", nextHash);
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    // Support direct links like /#projects and back/forward navigation.
    const go = () => {
      const id = window.location.hash?.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const headerOffset = 86;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "instant" });
    };

    // Let layout paint first.
    const t = window.setTimeout(go, 0);
    window.addEventListener("hashchange", go);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", go);
    };
  }, []);

  return (
    <div className="page">
      <header className="header">
        <div className="wrap header-inner">
          <button
            className="icon-btn mobile-only"
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>

          <button
            type="button"
            className="brand"
            onClick={() => scrollToId("home", { replaceHash: true })}
            aria-label="Go to home"
          >
            {PROFILE.name.toUpperCase()}
          </button>

          <nav className="nav desktop-only" aria-label="Primary">
            {NAV.map((n) => (
              <button
                key={n.id}
                type="button"
                className="nav-link"
                onClick={() => scrollToId(n.id)}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        <div className={menuOpen ? "mobile-drawer open" : "mobile-drawer"}>
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-top">
              <span className="mobile-drawer-title">Menu</span>
              <button
                type="button"
                className="icon-btn"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mobile-nav">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => scrollToId(n.id)}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {menuOpen ? (
          <button
            type="button"
            className="backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
      </header>

      <main className="wrap">
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="hero-top">
              <p className="kicker">{PROFILE.highlights.join(" · ")}</p>
              <h1 className="title">{PROFILE.name}</h1>
              <p className="subtitle">{PROFILE.headline}</p>
              <p className="summary">{PROFILE.summary}</p>

              <div className="stats">
                <div className="stat">
                  <div className="stat-label">Location</div>
                  <div className="stat-value">{PROFILE.location}</div>
                </div>
                <div className="stat">
                  <div className="stat-label">Experience</div>
                  <div className="stat-value">{PROFILE.experience}</div>
                </div>
              </div>

              <div className="cta-row">
                <a className="cta" href={PROFILE.links.email}>
                  Email
                </a>
                <a className="cta" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="cta" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  className="cta cta-ghost"
                  href={PROFILE.links.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <img className="avatar" src={profile} alt={`${PROFILE.name} portrait`} />
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <h2 className="section-title">🛠️ Skills</h2>
          </div>

          <div className="grid">
            {SKILLS.map((group) => (
              <div className="card" key={group.title}>
                <h3 className="card-title">{group.title}</h3>
                <div className="pills">
                  {group.items.map((s) => (
                    <span className="pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <h2 className="section-title">💻 Experience</h2>
            <div className="muted">{EXPERIENCE.length} item{EXPERIENCE.length === 1 ? "" : "s"}</div>
          </div>

          <div className="stack">
            {EXPERIENCE.map((x) => (
              <div className="accordion" key={`${x.company}-${x.role}`}>
                <div className="accordion-summary">
                  <div className="accordion-left">
                    <div className="accordion-title">{x.role}</div>
                    <div className="accordion-subtitle">
                      {x.company} <span className="dot">·</span> {x.meta}
                    </div>
                  </div>
                  <div className="accordion-right">
                    <div className="pills pills-compact">
                      {x.tags.map((t) => (
                        <span className="pill pill-compact" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="accordion-body">
                  <ul className="bullets">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <h2 className="section-title">🚀 Projects</h2>
            <div className="muted">{PROJECTS.length} item{PROJECTS.length === 1 ? "" : "s"}</div>
          </div>

          <div className="stack">
            {PROJECTS.map((p) => (
              <div className="project" key={p.title}>
                <div className="project-top">
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    {p.meta ? <div className="project-subtitle">{p.meta}</div> : null}
                  </div>
                  <div className="project-links">
                    {p.links.map((l) => (
                      <a key={l.label} className="link" href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
                <ul className="bullets project-bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="pills pills-compact">
                  {p.tags.map((t) => (
                    <span className="pill pill-compact" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-head">
            <h2 className="section-title">🎓 Education</h2>
          </div>

          <div className="stack">
            {EDUCATION.map((e) => (
              <div className="row" key={e.title}>
                <div className="row-title">{e.title}</div>
                <div className="row-meta">{e.meta}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <h2 className="section-title">📞 Contact</h2>
          </div>

          <div className="card contact-card">
            <h3 className="card-title">Let’s build together</h3>
            <p className="muted">
              Open to frontend roles focused on React, modern JavaScript, and building clean, user-friendly web applications.
            </p>
            <div className="cta-row">
              <a className="cta" href={PROFILE.links.email}>
                Email
              </a>
              <a className="cta" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="cta" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="cta cta-ghost" href={PROFILE.links.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span className="muted">Developed by {PROFILE.name}</span>
        </footer>
      </main>
    </div>
  );
}
