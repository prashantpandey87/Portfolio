import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

export default function App() {
  const PROFILE = useMemo(
    () => ({
      name: "Prashant Pandey",
      headline: "Sr. Project Engineer · React · SQL/PLSQL · Power BI",
      summary:
        "Senior Project Engineer with 4+ years of experience building data-driven web apps and interactive dashboards. I enjoy turning messy data into clean, useful products.",
      location: "Noida, India",
      experience: "4+ years experience",
      highlights: ["React", "SQL/PLSQL", "Power BI"],
      links: {
        email: "mailto:prashantpandey@example.com",
        linkedin: "https://www.linkedin.com/in/",
        github: "https://github.com/",
        resume: "/resume.pdf",
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
      { id: "achievements", label: "Achievements" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const SKILLS = useMemo(
    () => [
      {
        title: "Frontend",
        items: ["React", "JavaScript", "HTML", "CSS"],
      },
      {
        title: "Data",
        items: ["SQL", "PL/SQL", "Power BI", "DAX", "Data Modeling"],
      },
      {
        title: "Tools",
        items: ["Git", "Postman", "VS Code", "Cursor"],
      },
    ],
    []
  );

  const EXPERIENCE = useMemo(
    () => [
      {
        role: "Sr. Project Engineer",
        company: "Wipro Limited",
        meta: "2021 – Present",
        tags: ["React", "SQL/PLSQL", "Power BI"],
        bullets: [
          "Working as a Senior Project Engineer, contributing to application development and data analytics initiatives.",
          "Responsible for optimizing SQL/PLSQL queries, handling large-scale data operations, and developing interactive web applications using ReactJS.",
          "Developed Power BI dashboards and reports to provide actionable insights for stakeholders and support data‑driven decision‑making.",
          "Collaborated with cross‑functional teams across end‑to‑end development, database management, and technical problem‑solving while maintaining high performance and data integrity.",
          "Continuously learning and implementing new technologies to improve development efficiency and analytical capabilities.",
        ],
      },
    ],
    []
  );

  const PROJECTS = useMemo(
    () => [
      {
        title: "Web Application Development",
        links: [],
        bullets: [
          "Developed dynamic and responsive UI components using ReactJS and modern practices like React Hooks.",
          "Integrated REST APIs using fetch and Axios, handling JSON responses and state updates.",
          "Implemented React Router for multi‑page navigation and protected routes.",
          "Improved application performance through lazy loading and memoization to minimize re‑renders.",
          "Utilized HTML5, CSS3, Bootstrap, and Material‑UI to design clean and intuitive UI layouts.",
        ],
        tags: ["ReactJS", "JavaScript", "React Router", "Material‑UI"],
      },
      {
        title: "Power BI Reporting & Analytics Dashboard",
        links: [],
        bullets: [
          "Developed interactive dashboard to analyze operational and project performance metrics with DAX‑based KPIs.",
          "Integrated multiple data sources and automated refresh; reduced manual reporting with real‑time tracking.",
        ],
        tags: ["Power BI", "DAX", "SQL", "SharePoint"],
      },
      {
        title: "Data Migration (Greenplum/Hive → BigQuery)",
        links: [],
        bullets: [
          "Performed large‑scale data migration from Greenplum and Hive into Google BigQuery using SQL‑based ETL processes.",
          "Wrote and optimized SQL queries; resolved migration errors and schema mismatches using advanced SQL debugging.",
          "Executed data validation and reconciliation via record‑level comparisons and checksum methods.",
        ],
        tags: ["SQL", "GCP", "BigQuery", "ETL", "Data Validation"],
      },
    ],
    []
  );

  const ACHIEVEMENTS = useMemo(
    () => [
      { title: "Power BI dashboard adoption", meta: "Improved reporting usability" },
      { title: "Query performance improvements", meta: "Reduced execution time on key reports" },
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
              <img className="avatar" src="/Portfolio/profile.png" alt={`${PROFILE.name} portrait`} />
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
                  <h3 className="project-title">{p.title}</h3>
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

        <section id="achievements" className="section">
          <div className="section-head">
            <h2 className="section-title">🏅 Achievements</h2>
          </div>

          <div className="stack">
            {ACHIEVEMENTS.map((a) => (
              <div className="row" key={a.title}>
                <div className="row-title">{a.title}</div>
                <div className="row-meta">{a.meta}</div>
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
              Open to React + data roles, dashboarding, and building clean internal tools.
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
