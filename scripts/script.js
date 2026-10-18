// Theme toggle. System preference by default; a manual choice is saved in localStorage.
const themeToggle = document.querySelector(".theme-toggle");
const themePreference = window.matchMedia("(prefers-color-scheme: dark)");
const themeColor = document.querySelector('meta[name="theme-color"]');
const isDarkTheme = () => {
  const chosen = document.documentElement.dataset.theme;
  return chosen ? chosen === "dark" : themePreference.matches;
};

function updateThemeControl() {
  const isDark = isDarkTheme();
  if (themeColor) themeColor.content = isDark ? "#121211" : "#f7f6f2";
  if (!themeToggle) return;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.lastElementChild.textContent = isDark ? "Light" : "Dark";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = isDarkTheme() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("jcdesigns-theme", next); } catch (e) { /* applies for this page only */ }
    updateThemeControl();
  });
  themePreference.addEventListener("change", updateThemeControl);
}
updateThemeControl();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
}

// Lightbox (gallery pages). Without JS or <dialog> support, links just open the image.
const box = document.querySelector(".lightbox");
if (box && typeof box.showModal === "function") {
  const img = box.querySelector("img");
  const caption = box.querySelector("figcaption");
  document.querySelectorAll(".piece-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const thumb = link.querySelector("img");
      img.src = link.href;
      img.alt = thumb.alt;
      caption.textContent = `${link.dataset.title} — ${link.dataset.category}`;
      box.showModal();
    });
  });
  box.querySelector(".lightbox-close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box || e.target.tagName === "FIGURE") box.close(); });
}
