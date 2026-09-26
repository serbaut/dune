// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

// Close mobile nav when a link is clicked
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Contact form (demo handler — replace with your backend/form service)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Thank you! Your appointment request has been received.";
  form.reset();
});

// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();
