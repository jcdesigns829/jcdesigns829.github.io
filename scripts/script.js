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
