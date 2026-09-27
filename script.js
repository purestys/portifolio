// ================================================================
// PORTFÓLIO — ÁREA PRINCIPAL DE EDIÇÃO
// ================================================================
//
// >>> PARA ALTERAR O SITE DE EXEMPLO:
// Edite SOMENTE o objeto dentro de "const projects" logo abaixo.
//
// >>> PARA ADICIONAR UM SITE QUE VOCÊ FEZ:
// 1. Copie o objeto do projeto "blank".
// 2. Cole uma vírgula depois do objeto anterior e cole a cópia.
// 3. Troque name, description, technologies, link e image.
// 4. Se quiser filtros personalizados, altere "categories".
//
// >>> IMAGEM DO PROJETO:
// Coloque sua imagem dentro da pasta "assets".
// Exemplo: image: "assets/meu-site.jpg"
//
// ================================================================

const projects = [
  // ==============================================================
  // >>> EDITE ESTE PROJETO "blank" PARA COLOCAR O SEU PRIMEIRO SITE
  // ==============================================================
  {
    name: "blank", // <<< ALTERE AQUI: nome do seu site
    description: "Descrição do projeto. Altere este texto para explicar o que você criou.", // <<< ALTERE AQUI
    technologies: ["HTML", "CSS", "JavaScript"], // <<< ALTERE AQUI: tecnologias usadas
    categories: ["html", "javascript"], // <<< ALTERE AQUI se necessário
    link: "#", // <<< ALTERE AQUI: coloque o link do seu site
    image: "assets/blank-site.svg", // <<< ALTERE AQUI: caminho da imagem do projeto
    featured: true
  }

  // ==============================================================
  // >>> PARA ADICIONAR OUTRO SITE:
  // Cole outro objeto aqui, seguindo o modelo abaixo.
  //
  // ,{
  //   name: "Nome do meu site",
  //   description: "Descrição do que eu fiz.",
  //   technologies: ["HTML", "CSS"],
  //   categories: ["html"],
  //   link: "https://meu-site.com",
  //   image: "assets/meu-site.jpg",
  //   featured: true
  // }
  // ============================================================== 
];


// ================================================================
// >>> ÁREA DE HABILIDADES
// Altere os nomes e porcentagens abaixo se quiser.
// ================================================================
const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 78 },
  { name: "Node.js", level: 72 },
  { name: "UI / UX", level: 84 },
  { name: "Git / GitHub", level: 85 },
];

const projectsGrid = document.getElementById("projectsGrid");
const filters = document.getElementById("filters");
const moreProjects = document.getElementById("moreProjects");

let activeFilter = "todos";
let showingAll = false;
const initialProjectCount = 6;

function projectCard(project, index) {
  const imageContent = project.image
    ? `<img src="${project.image}" alt="Preview do projeto ${project.name}" loading="lazy">`
    : `<div class="image-placeholder">${project.name}</div>`;

  const projectLink = project.link && project.link !== "#"
    ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">Visitar site <span>↗</span></a>`
    : `<span class="project-link project-link-disabled">Adicione o link do site no script.js <span>↗</span></span>`;

  return `
    <article class="project-card reveal" data-categories="${project.categories.join(" ")}" style="animation-delay:${index * 60}ms">
      <div class="project-image">${imageContent}</div>
      <div class="project-body">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
        </div>
        ${projectLink}
      </div>
    </article>
  `;
}

function renderProjects() {
  const filtered = activeFilter === "todos"
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  const visible = showingAll ? filtered : filtered.slice(0, initialProjectCount);
  projectsGrid.innerHTML = visible.map(projectCard).join("");

  const shouldShowMore = filtered.length > initialProjectCount && !showingAll;
  moreProjects.classList.toggle("hidden", !shouldShowMore);

  requestAnimationFrame(() => {
    document.querySelectorAll(".project-card.reveal").forEach(card => card.classList.add("visible"));
  });
}

if (filters) {
  filters.addEventListener("click", event => {
    const button = event.target.closest(".filter");
    if (!button) return;

    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    showingAll = false;
    renderProjects();
  });
}

if (moreProjects) {
  moreProjects.addEventListener("click", () => {
    showingAll = true;
    renderProjects();
  });
}

// Tema claro/escuro com persistência.
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function updateThemeIcon() {
  const dark = document.body.classList.contains("dark");
  themeIcon.textContent = dark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.body.classList.add("dark");
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
});

// Menu mobile.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

// Animações de entrada ao rolar.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

// Habilidades.
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = skills.map(skill => `
  <article class="skill reveal">
    <div class="skill-top">
      <h3>${skill.name}</h3>
      <span class="skill-percent">${skill.level}%</span>
    </div>
    <div class="progress" aria-label="${skill.name}: ${skill.level}%">
      <span style="--level:${skill.level}%"></span>
    </div>
  </article>
`).join("");

document.querySelectorAll(".skill.reveal").forEach(element => observer.observe(element));

// Header e botão voltar ao topo.
const header = document.querySelector(".header");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
  backTop.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ================================================================
// >>> E-MAIL DE CONTATO
// ALTERE o e-mail abaixo para o seu.
// ================================================================
const contactForm = document.getElementById("contactForm");
const contactEmail = "ph.eve.cris@gmail.com";

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});

// Ano automático.
document.getElementById("year").textContent = new Date().getFullYear();

// Render inicial.
renderProjects();
