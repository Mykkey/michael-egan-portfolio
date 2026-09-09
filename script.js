const projects = [
    {
    title: "Winterbourne Consulting",
    meta: "Client Work · 2026",
    description: "I handled the digital setup for Winterbourne Consulting, including website development, domain configuration, Microsoft 365 admin setip, and iterative logo refinement.",
    tags: ["HTML", "CSS", "Bootstrap", "Microsoft 365"],
    linkLabel: "View Website",
    linkUrl: "https://winterbourneconsulting.com"
  },
  {
    title: "Shoot The Shapes",
    meta: "Games Development Project · 2025",
    description: "A Java Swing arcade-style game where players control a turret to shoot moving geometric shapes. Features multiple shape types, increasing difficulty levels, score tracking, and collision detection with real-time feedback.",
    tags: ["C#", "Unity"],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mykkey/GamesDevProject"
  },
  {
    title: "2D Matrix Transformation Visualiser",
    meta: "Linear Algebra Project · 2025",
    description: "A Java Swing tool for visualising 2×2 matrix transformations on a square. Apply rotations, scales, reflections, shears, or your own custom matrix and see the result instantly.",
    tags: ["Java", "Swing", "exp4j"],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mykkey/Matrix-Visualiser"
  },
  {
    title: "2D Graph Visualiser",
    meta: "Personal Project · 2025",
    description: "A Java app for sketching and exploring 2D functions. Built with Swing and exp4j. Made to scratch an itch: type an expression, see it plotted.",
    tags: ["Java", "Swing", "exp4j"],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mykkey/Graph-Visualiser"
  },
  {
    title: "Falling Sand Simulator",
    meta: "Personal project · 2025",
    description: "A 2D sandbox inspired by cellular automata, built in Java Swing. Simulates falling sand, flowing water, and static terrain.",
    tags: ["Java", "Swing"],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mykkey/FallingSandV3"
  }
];



const certifications = [
  {
    title: "Introdution to Cybersecurity",
    meta: "Cisco · 2025",
    description: "An introductory Cisco Networking Academy credential that teaches the basics of cybersecurity, common threats, data protection, and how organisations defend against attacks.",
    tags: ["Cybersecurity", "Data Protection"],
    linkLabel: "View credential",
    linkUrl: "https://www.credly.com/badges/c3679bf5-98d6-45bb-b018-8196e9bb68eb/public_url"
  },
  {
    title: "Introdution to Cybersecurity Awareness",
    meta: "HP · 2026",
    description: "An introductory HP LIFE credential that teaches the fundamentals of cybersecurity awareness, online safety, data protection, and how to recognise common security threats.",
    tags: ["Cybersecurity", "Data Protection"],
    linkLabel: "View credential",
    linkUrl: "https://www.life-global.org/certificate/8237f235-cdc1-4f1e-9418-7598c5941a37"
  },
  {
    title: "AI for Business Professionals",
    meta: "HP · 2026",
    description: "An introductory HP LIFE credential that explores how artificial intelligence can be used in business, including AI tools, applications, productivity, and responsible use.",
    tags: ["Artificial Intelligence", "Business"],
    linkLabel: "View credential",
    linkUrl: "https://www.life-global.org/certificate/2258304f-b943-453b-bdd6-d31484daf8b1"
  },
  {
    title: "AI for Beginners",
    meta: "HP · 2026",
    description: "An introductory HP LIFE credential that teaches the fundamentals of artificial intelligence, including key concepts, common applications, and the impact of AI.",
    tags: ["Artificial Intelligence", "Machine Learning"],
    linkLabel: "View credential",
    linkUrl: "https://www.life-global.org/certificate/c87440c9-46b8-48e1-b210-d1215f1339a4"
  },
  {
    title: "Data Science & Analytics",
    meta: "HP · 2026",
    description: "An introductory HP LIFE credential that teaches the fundamentals of data science and analytics, including data analysis, visualisation, and using data to support decisions.",
    tags: ["Data Science", "Data Analytics"],
    linkLabel: "View credential",
    linkUrl: "https://www.life-global.org/certificate/17eb761c-f807-4373-9b22-f566dbf8dbdb"
  }
];

/* ============================================
   RENDERING
   ============================================ */

function renderCards(list, targetId, cardClass) {
  const grid = document.getElementById(targetId);
  if (!grid) return;

  grid.innerHTML = list.map(item => `
    <article class="card ${cardClass}">
      <span class="card__meta">${item.meta}</span>
      <h3 class="card__title">${item.title}</h3>
      <p class="card__desc">${item.description}</p>
      ${item.tags && item.tags.length ? `
        <div class="card__tags">
          ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>` : ""}
      ${item.linkUrl ? `<a class="card__link" href="${item.linkUrl}" target="_blank" rel="noopener">${item.linkLabel || "Learn more"}</a>` : ""}
    </article>
  `).join("");
}

renderCards(projects, "projectGrid", "card--project");
renderCards(certifications, "certGrid", "card--cert");

/* ============================================
   NAV: mobile toggle
   ============================================ */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ============================================
   TOOLKIT: show more / less tags
   ============================================ */
const tagToggle = document.getElementById("tagToggle");
const tagList = document.getElementById("tagList");
 
if (tagToggle && tagList) {
  tagToggle.addEventListener("click", () => {
    const expanded = tagList.classList.toggle("is-expanded");
    tagToggle.textContent = expanded ? "Show less" : "Show more";
    tagToggle.setAttribute("aria-expanded", String(expanded));
  });
}

/* ============================================
   SECTION REVEAL on scroll
   ============================================ */
const revealTargets = document.querySelectorAll(".section__head, .about__grid, .card-grid, .contact__grid");
revealTargets.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));