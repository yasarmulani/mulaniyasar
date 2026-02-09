/*
  main.js
  Reads `window.CONTENT` (from content.js) and renders the portfolio into
  the empty containers in index.html.
  
  Styling: TailwindCSS
  Theme: Minimal Academic with Blue Accents
*/

// Utility: create an element with optional class and text
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Build header section
function renderHeader(root, h) {
  const container = el('div', 'max-w-3xl w-full mx-auto px-4 py-10');
  const top = el('div', 'flex flex-col sm:flex-row items-center sm:items-start gap-6');

  // Profile image
  const img = document.createElement('img');
  img.src = h.profileImage || '/assets/profile.jpeg';
  img.alt = `${h.name} profile`;
  img.width = 120;
  img.height = 120;
  // Added a subtle shadow (removed ring border)
  img.className = 'rounded-md object-cover w-32 h-32 shadow-sm';

  const meta = el('div', 'text-center sm:text-left flex-1');
  // Name in dark slate, slightly larger
  meta.appendChild(el('h1', 'text-3xl font-bold text-slate-900 tracking-tight', h.name));
  
  // Role & Affiliation
  meta.appendChild(el('div', 'text-lg text-slate-600 mt-1 font-light', `${h.role}  ${h.affiliation}`));
  
  // Email link with colored icon styling
  const emailLink = document.createElement('a');
  emailLink.href = `mailto:${h.email}`;
  emailLink.className = 'inline-block mt-3 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline transition-colors';
  emailLink.textContent = h.email;
  meta.appendChild(emailLink);

  top.appendChild(img);
  top.appendChild(meta);
  container.appendChild(top);
  root.appendChild(container);
}

// Build nav
function renderNav(root, items) {
  // Sticky nav wrapper (full width background for contrast/blur)
  const container = el('div', 'w-full bg-slate-50/90 backdrop-blur-sm sticky top-0 z-10');
  
  // Content container with borders constrained to content width
  const inner = el('div', 'max-w-3xl w-full mx-auto px-4 py-3 flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm font-medium text-slate-600 border-y border-slate-200');
  
  items.forEach(name => {
    const a = document.createElement('a');
    a.href = `#${name.toLowerCase()}`;
    a.textContent = name;
    // Hover accent color
    a.className = 'hover:text-blue-800 transition-colors';
    inner.appendChild(a);
  });
  container.appendChild(inner);
  root.appendChild(container);
}

// Generic section wrapper with colored heading
function section(id, title, contentBuilder) {
  const sec = el('section', 'max-w-3xl w-full mx-auto px-4 py-8 mb-4 scroll-mt-14');
  sec.id = id;
  
  // Heading: Accent color, cleaner typography, subtle underline
  if (title) {
    const h2 = el('h2', 'text-xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2', title);
    sec.appendChild(h2);
  }
  
  const body = el('div','text-slate-800 leading-relaxed');
  contentBuilder(body);
  sec.appendChild(body);
  return sec;
}

// Render About
function renderAbout(root, about) {
  const sec = section('about','About', (body) => {
    // Bio text
    const p = el('p','mb-6 text-slate-700 leading-7', about.bio);
    body.appendChild(p);

    // Research Interests
    body.appendChild(el('h3', 'text-sm font-bold text-slate-400 uppercase tracking-wider mb-3', 'Research Interests'));
    const ul = el('ul','grid sm:grid-cols-2 gap-x-4 gap-y-1 list-none'); 
    
    // Custom bullets using Tailwind markers for simplicity with color
    about.interests.forEach(i => {
      const li = el('li', 'flex items-start gap-2 text-slate-700');
      // Minimal custom bullet
      const bullet = el('span', 'text-blue-600 font-bold', '');
      li.appendChild(bullet);
      li.appendChild(document.createTextNode(i));
      ul.appendChild(li);
    });
    body.appendChild(ul);

    // Personal Interests
    if (about.personalInterests) {
      body.appendChild(el('h3', 'text-sm font-bold text-slate-400 uppercase tracking-wider mt-8 mb-3', 'Other Interests'));
      const ulPers = el('ul','flex flex-wrap gap-4 text-slate-600 italic');
      about.personalInterests.forEach((i, idx) => {
        if (idx > 0) ulPers.appendChild(el('span', 'text-slate-300', ''));
        ulPers.appendChild(el('li','', i));
      });
      body.appendChild(ulPers);
    }
  });
  root.appendChild(sec);
}

// Render Philosophy (Separate Section)
function renderPhilosophy(root, philosophy) {
  if (!philosophy || philosophy.length === 0) return;

  const sec = section('philosophy', 'Philosophy', (body) => {
    philosophy.forEach(quote => {
      const q = el('blockquote', 'border-l-4 border-blue-700/30 pl-4 py-3 italic text-slate-600 bg-slate-50 mb-4 rounded-r-sm', `${quote}`);
      body.appendChild(q);
    });
  });
  root.appendChild(sec);
}

// Render Experience (Timeline)
function renderExperience(root, experience) {
  const sec = section('experience', 'Experience', (body) => {
    const list = el('div', 'space-y-4');
    experience.forEach(item => {
      const row = el('div', 'flex flex-col sm:flex-row sm:justify-between sm:items-baseline group');
      
      // Year on the left, slightly muted
      const left = el('div', 'sm:w-1/4 text-sm font-semibold text-blue-700/80 mb-1 sm:mb-0', item.year);
      
      const right = el('div', 'sm:w-3/4');
      // Role title
      const title = el('div', 'font-semibold text-slate-800', item.role);
      // Institution
      const place = el('div', 'text-slate-600', item.institution);
      
      right.appendChild(title);
      right.appendChild(place);
      
      row.appendChild(left);
      row.appendChild(right);
      list.appendChild(row);
    });
    body.appendChild(list);
  });
  root.appendChild(sec);
}

// Render Research themes
function renderResearch(root, themes) {
  const sec = section('research','Research Themes', (body) => {
    const ul = el('ul','space-y-2');
    themes.forEach(t => {
        const li = el('li', 'flex items-start gap-2 text-slate-700');
        const bullet = el('span', 'text-blue-600 mt-1', '');
        li.appendChild(bullet);
        li.appendChild(document.createTextNode(t));
        ul.appendChild(li);
    });
    body.appendChild(ul);
  });
  root.appendChild(sec);
}

// Render Publications
function renderPublications(root, pubs) {
  const sec = section('publications','Publications', (body) => {
    pubs.forEach(p => {
      const d = el('div','mb-6');
      const title = el('div','font-medium text-slate-900 leading-snug mb-1', p.title);
      // Authors and venue
      const meta = el('div','text-sm text-slate-600');
      // Highlight user's name if possible (simple split check)
      // Assuming 'Yasar Mulani' is the name to bold
      const parts = p.authors.split('Yasar Mulani');
      if (parts.length > 1) {
         meta.appendChild(document.createTextNode(parts[0]));
         const b = el('span', 'font-semibold text-slate-900', 'Yasar Mulani');
         meta.appendChild(b);
         meta.appendChild(document.createTextNode(parts[1]));
         meta.appendChild(document.createTextNode(`  ${p.venue} (${p.year})`));
      } else {
         meta.textContent = `${p.authors}  ${p.venue} (${p.year})`;
      }
      d.appendChild(title);
      d.appendChild(meta);
      body.appendChild(d);
    });
  });
  root.appendChild(sec);
}

// Render Projects
function renderProjects(root, projects) {
  const sec = section('projects','Projects', (body) => {
    
    // Helper to render project list
    const renderList = (title, items) => {
        if (!items || items.length === 0) return;
        body.appendChild(el('h3', 'font-semibold text-slate-800 mb-2 mt-4', title));
        const ul = el('ul','pl-4 space-y-1 mb-6 border-l-2 border-slate-100');
        items.forEach(p => {
            const li = el('li', 'text-slate-700 mb-1', p);
            ul.appendChild(li);
        });
        body.appendChild(ul);
    };

    renderList('Completed', projects.completed);
    renderList('Ongoing', projects.ongoing);
  });
  root.appendChild(sec);
}

// Render Talks & Teaching
function renderTalks(root, talks) {
  const sec = section('talks','Talks & Teaching', (body) => {
    if (talks.invited.length) {
      body.appendChild(el('h3','font-semibold text-slate-800 mb-2','Invited Talks'));
      const ul = el('ul','list-disc ml-5 mb-6 text-slate-700');
      talks.invited.forEach(t => ul.appendChild(el('li','pl-1 marker:text-blue-600', t)));
      body.appendChild(ul);
    }
    if (talks.teaching.length) {
      body.appendChild(el('h3','font-semibold text-slate-800 mb-2','Teaching'));
      const ul2 = el('ul','list-disc ml-5 text-slate-700');
      talks.teaching.forEach(t => ul2.appendChild(el('li','pl-1 marker:text-blue-600', t)));
      body.appendChild(ul2);
    }
  });
  root.appendChild(sec);
}

// Render Contact
function renderContact(root, headerData) {
  const sec = section('contact', 'Contact', (body) => {
      const box = el('div', 'bg-slate-50 p-6 rounded-sm border border-slate-100 text-center');
      box.appendChild(el('p', 'text-slate-600 mb-3', 'I am always open to discussing new research collaborations and opportunities.'));
      
      const a = el('a', 'inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium hover:underline', headerData.email);
      a.href = `mailto:${headerData.email}`;
      // Simple email icon
      const icon = el('span', '', '');
      a.prepend(icon);
      
      box.appendChild(a);
      body.appendChild(box);
  });
  root.appendChild(sec);
}

// Render Footer
function renderFooter(root, profiles) {
  const container = el('div','max-w-3xl w-full mx-auto px-4 py-12 text-center');
  
  // Social Links
  const links = el('div','flex justify-center gap-6 mb-4 font-medium text-slate-600');
  
  const addLink = (text, url) => {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.textContent = text;
    a.target = '_blank';
    a.className = 'hover:text-blue-800 transition-colors border-b border-transparent hover:border-blue-800';
    links.appendChild(a);
  };

  addLink('GitHub', profiles.github);
  addLink('Google Scholar', profiles.scholar);
  addLink('LinkedIn', profiles.linkedin);
  
  container.appendChild(links);
  
  // Copyright/Credit
  const copy = el('div', 'text-xs text-slate-400', ` ${new Date().getFullYear()} Yasar Mulani. Built with vanilla JS & Tailwind.`);
  container.appendChild(copy);
  
  root.appendChild(container);
}

// Initialize page render
document.addEventListener('DOMContentLoaded', () => {
  const C = window.CONTENT;
  if (!C) return;

  // Header
  const header = document.getElementById('site-header');
  renderHeader(header, C.header);

  // Nav
  const nav = document.getElementById('site-nav');
  renderNav(nav, C.nav);

  // Main sections
  const main = document.getElementById('site-main');
  renderAbout(main, C.about);
  
  if (C.experience) renderExperience(main, C.experience);
  
  renderResearch(main, C.research);
  renderPublications(main, C.publications);
  renderProjects(main, C.projects);
  renderTalks(main, C.talks);

  // Philosophy (just above Contact)
  if (C.about && C.about.philosophy) {
    renderPhilosophy(main, C.about.philosophy);
  }

  renderContact(main, C.header);

  // Footer
  const footer = document.getElementById('site-footer');
  renderFooter(footer, C.profiles);
});
