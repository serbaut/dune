// ===== Mobile navigation toggle =====
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== House tabs =====
const houseTabs = document.querySelectorAll(".house-tab");
const housePanels = document.querySelectorAll(".house-panel");

if (houseTabs.length && housePanels.length) {
  houseTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.house;

      houseTabs.forEach((t) => t.classList.remove("active"));
      housePanels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPanel = document.querySelector(`.house-panel[data-house="${target}"]`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

// ===== Sand particles =====
const container = document.getElementById("sandParticles");

if (container) {
  function createParticle() {
    const p = document.createElement("div");
    p.className = "sand-particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 8 + Math.random() * 12 + "s";
    p.style.animationDelay = Math.random() * 10 + "s";
    p.style.width = p.style.height = 1 + Math.random() * 2 + "px";
    container.appendChild(p);
  }

  for (let i = 0; i < 40; i++) createParticle();
}

// ===== CTA form =====
const ctaForm = document.getElementById("ctaForm");
const ctaStatus = document.getElementById("ctaStatus");

if (ctaForm && ctaStatus) {
  ctaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ctaStatus.textContent = "The spice flows. Welcome to Arrakis, traveler.";
    ctaForm.reset();
  });
}

// ===== Dynamic year =====
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Scroll reveal =====
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".spice-card, .fremen-stat, .timeline-item, .lore-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ===== Gallery Interactive Features =====
const glowToggleBtn = document.getElementById("toggleGlowBtn");
const artworkContainer = document.getElementById("artworkContainer");

if (glowToggleBtn && artworkContainer) {
  glowToggleBtn.addEventListener("click", () => {
    const active = artworkContainer.classList.toggle("hyper-glow");
    glowToggleBtn.textContent = active ? "✨ Spice Glow: High" : "✨ Spice Glow: Normal";
  });
}
