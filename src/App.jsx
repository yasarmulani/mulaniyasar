import React, { useState, useEffect } from "react";
import CONTENT from "./content";
import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react'

const SocialIcons = ({ profiles, className = "" }) => (
  <div className={`flex gap-4 ${className}`}>
    {profiles.github && (
      <a href={profiles.github} target="_blank" aria-label="GitHub" className="text-slate-500 hover:text-blue-700 transition-colors">
        <Github className="w-5 h-5" />
      </a>
    )}
    {profiles.scholar && (
      <a href={profiles.scholar} target="_blank" aria-label="Google Scholar" className="text-slate-500 hover:text-blue-700 transition-colors">
        <GraduationCap className="w-5 h-5" />
      </a>
    )}
    {profiles.linkedin && (
       <a href={profiles.linkedin} target="_blank" aria-label="LinkedIn" className="text-slate-500 hover:text-blue-700 transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
    )}
  </div>
)

const Header = ({ h, profiles }) => (
  <div className="max-w-3xl w-full mx-auto px-4 py-10">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <img
        src={h.profileImage || "/assets/profile.jpg"}
        alt={`${h.name} profile`}
        width="120"
        height="120"
        className="rounded-md object-cover w-32 h-32 shadow-sm"
      />
      <div className="text-center sm:text-left flex-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          {h.name}
        </h1>
        <div className="text-lg text-slate-600 mt-1 font-light">
          {h.role} {h.affiliation}
        </div>
        <a
          className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline transition-colors"
          href={`mailto:${h.email}`}
        >
          <Mail className="w-4 h-4" />
          {h.email}
        </a>

        {/* Social Icons */}
        <SocialIcons profiles={profiles} className="justify-center sm:justify-start mt-4" />
      </div>
    </div>
  </div>
);


const Nav = ({ items }) => (
  <div className="w-full bg-slate-50/90 backdrop-blur-sm sticky top-0 z-10">
    <div className="max-w-3xl w-full mx-auto px-4 py-3 flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm font-medium text-slate-600 border-y border-slate-200">
      {items.map((name) => (
        <a
          key={name}
          href={`#${name.toLowerCase()}`}
          className="hover:text-blue-800 transition-colors"
        >
          {name}
        </a>
      ))}
    </div>
  </div>
);

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="max-w-3xl w-full mx-auto px-4 py-8 mb-4 scroll-mt-14"
  >
    {title && (
      <h2 className="text-xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">
        {title}
      </h2>
    )}
    <div className="text-slate-800 leading-relaxed">{children}</div>
  </section>
);

const About = ({ about }) => (
  <Section id="about" title="About">
    <p className="mb-6 text-slate-700 leading-7">{about.bio}</p>

    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
      Research Interests
    </h3>
    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
      {about.interests.map((i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700">
          <span className="text-blue-600 font-bold" />
          {i}
        </li>
      ))}
    </ul>
  </Section>
);

const Philosophy = ({ philosophy }) => {
  if (!philosophy || philosophy.length === 0) return null;
  return (
    <Section id="philosophy" title="Misc">
      {philosophy.map((q, idx) => (
        <blockquote
          key={idx}
          className="border-l-4 border-blue-700/30 pl-4 py-3 italic text-slate-600 bg-slate-50 mb-4 rounded-r-sm"
        >
          {q}
        </blockquote>
      ))}

    </Section>
  );
};

const Experience = ({ items }) => (
  <Section id="experience" title="Experience">
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline group"
        >
          <div className="sm:w-1/4 text-sm font-semibold text-blue-700/80 mb-1 sm:mb-0">
            {item.year}
          </div>
          <div className="sm:w-3/4">
            <div className="font-semibold text-slate-800">{item.role}</div>
            <div className="text-slate-600">{item.institution}</div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Research = ({ themes }) => (
  <Section id="research" title="Research Themes">
    <ul className="space-y-2">
      {themes.map((t, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700">
          <span className="text-blue-600 mt-1" />
          {t}
        </li>
      ))}
    </ul>
  </Section>
);

const Publications = ({ pubs }) => {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    setActiveTab("All");
  }, []);

  const tabs = ["All", "Preprints"];

  const filtered =
    activeTab === "All" ? pubs : pubs.filter((p) => p.status === "Preprint");

  return (
    <Section id="publications" title="Publications">
      <div className="max-w-3xl mx-auto px-2 mb-4">
        <div className="relative flex gap-3 -mb-3" role="tablist" aria-label="Publication filters">
          {tabs.map((t, i) => {
            const isActive = t === activeTab;
            return (
              <button
                key={t}
                role="tab"
                aria-pressed={isActive}
                onClick={() => setActiveTab(t)}
                className={`relative z-${isActive ? 20 : 10} px-4 py-2 rounded-t-lg border border-slate-200 ${isActive ? "bg-white -translate-y-2 border-b-0" : "bg-slate-100"} transition-all duration-200`}
                style={{ marginLeft: i === 0 ? 0 : -12 }}
              >
                <span className={`text-sm font-medium ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                  {t}
                </span>
              </button>
            );
          })}
        </div>

        <div className="border border-slate-200 rounded-b-lg bg-white p-4 pt-6">
          {filtered.length === 0 ? (
            <div className="text-sm text-slate-600">No publications found.</div>
          ) : (
            <div className="space-y-6">
              {filtered.map((p, i) => (
                <div key={i} className="mb-2">
                  <div className="font-medium text-slate-900 leading-snug mb-1">{p.title}</div>
                  <div className="text-sm text-slate-600">
                    {p.authors.includes("Yasar Mulani") ? (
                      <span>
                        {p.authors.replace("Yasar Mulani", "")}
                        <strong className="font-semibold text-slate-900">Yasar Mulani</strong>{" "}
                        {` ${p.venue} (${p.year})`}
                      </span>
                    ) : (
                      `${p.authors}  ${p.venue} (${p.year})`
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl relative animate-in zoom-in-95 duration-200 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Hero Image */}
        <div className="w-full h-64 overflow-hidden relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex flex-col justify-end p-6">
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full w-fit mb-2 ${project.status === "Completed" ? "bg-green-500/90 text-white" : "bg-amber-500/90 text-white"}`}
            >
              {project.status}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight shadow-black drop-shadow-md">
              {project.title}
            </h2>
            <p className="text-slate-200 text-lg sm:text-xl font-light mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4 text-slate-700 leading-7">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={() => onClick(project)}
    className="group cursor-pointer bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-slate-300 flex flex-col h-full"
  >
    {/* 16:9 Aspect Ratio Image Container */}
    <div className="aspect-video w-full overflow-hidden relative bg-slate-100">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-2 right-2 flex gap-2">
        <span
          className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded shadow-sm text-white ${project.status === "Completed" ? "bg-green-600/90" : "bg-amber-600/90"}`}
        >
          {project.status}
        </span>
      </div>
    </div>

    <div className="p-4 flex flex-col flex-1">
      <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-700 transition-colors mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 mb-3">{project.subtitle}</p>

      {/* Spacer to push 'Read More' to bottom if needed, or just standard content flow */}
      <div className="mt-auto pt-2 flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
        View Project <span className="ml-1">→</span>
      </div>
    </div>
  </div>
);

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [activeTab]);

  const tabs = ["All", "Completed", "Ongoing"];

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.status === activeTab);

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <Section id="projects" title="Projects">
      {/* Tabs - folder style */}
      <div className="max-w-3xl mx-auto px-2 mb-4">
        <div
          className="relative flex gap-3 -mb-3"
          role="tablist"
          aria-label="Project filters"
        >
          {tabs.map((t, i) => {
            const isActive = t === activeTab;
            return (
              <button
                key={t}
                role="tab"
                aria-pressed={isActive}
                onClick={() => setActiveTab(t)}
                className={`relative z-${isActive ? 20 : 10} px-4 py-2 rounded-t-lg border border-slate-200 ${isActive ? "bg-white -translate-y-2 border-b-0" : "bg-slate-100"} transition-all duration-200`}
                style={{ marginLeft: i === 0 ? 0 : -12 }}
              >
                <span
                  className={`text-sm font-medium ${isActive ? "text-slate-900" : "text-slate-600"}`}
                >
                  {t}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="border border-slate-200 rounded-b-lg bg-white p-4 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visibleProjects.map((p, i) => (
              <ProjectCard key={i} project={p} onClick={setSelectedProject} />
            ))}
          </div>

          {filtered.length > 4 && (
            <div className="mt-8 text-center border-t border-slate-100 pt-6">
              <button
                onClick={() => setVisibleCount(pre => pre === filtered.length ? 4 : filtered.length)}
                className="px-6 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium rounded-full transition-colors border border-slate-200"
              >
                {visibleCount === filtered.length ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
};

const Talks = ({ talks }) => (
  <Section id="talks" title="Talks & Teaching">
    {talks.invited && talks.invited.length > 0 && (
      <>
        <h3 className="font-semibold text-slate-800 mb-2">Invited Talks</h3>
        <ul className="list-disc ml-5 mb-6 text-slate-700">
          {talks.invited.map((t) => (
            <li key={t} className="pl-1 marker:text-blue-600">
              {t}
            </li>
          ))}
        </ul>
      </>
    )}
    {talks.teaching && talks.teaching.length > 0 && (
      <>
        <h3 className="font-semibold text-slate-800 mb-2">Teaching</h3>
        <ul className="list-disc ml-5 text-slate-700">
          {talks.teaching.map((t) => (
            <li key={t} className="pl-1 marker:text-blue-600">
              {t}
            </li>
          ))}
        </ul>
      </>
    )}
  </Section>
);

const Contact = ({ headerData, profiles }) => (
  <Section id="contact" title="Contact">
    <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 text-center">
      <p className="text-slate-600 mb-3">
        I am always open to discussing new research collaborations and
        opportunities.
      </p>
      <a
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium hover:underline mb-4"
        href={`mailto:${headerData.email}`}
      >
        <Mail className="w-5 h-5" />
        {headerData.email}
      </a>
      
      {/* Social Icons for Contact */}
      <SocialIcons profiles={profiles} className="justify-center" />
    </div>
  </Section>
);

export default function App() {
  const C = CONTENT;
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full">
        <Header h={C.header} profiles={C.profiles} />
      </header>
      <nav className="w-full">
        <Nav items={C.nav} />
      </nav>
      <main className="w-full">
        <About about={C.about} />
        {C.experience && <Experience items={C.experience} />}
        <Research themes={C.research} />
        <Publications pubs={C.publications} />
        <Projects projects={C.projects} />
        <Talks talks={C.talks} />
        <Philosophy philosophy={C.about && C.about.philosophy} />
        <Contact headerData={C.header} profiles={C.profiles} />
      </main>
    </div>
  );
}
