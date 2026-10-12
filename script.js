const filterButtons = [...document.querySelectorAll(".filter-button")];
const galleryCards = [...document.querySelectorAll(".gallery-card")];
const galleryStatus = document.querySelector("#gallery-status");

if (filterButtons.length && galleryCards.length) {
  const filterNames = new Map(
    filterButtons.map((button) => [button.dataset.filter, button.textContent.trim()]),
  );

  function applyFilter(category, updateAddress = false) {
    const selectedCategory = filterNames.has(category) ? category : "all";
    let visibleCount = 0;

    filterButtons.forEach((button) => {
      const isSelected = button.dataset.filter === selectedCategory;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });

    galleryCards.forEach((card) => {
      const isVisible =
        selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !isVisible;
      visibleCount += Number(isVisible);
    });

    if (galleryStatus) {
      const label = filterNames.get(selectedCategory);
      galleryStatus.textContent = `${visibleCount} ${
        visibleCount === 1 ? "piece" : "pieces"
      } shown${selectedCategory === "all" ? "" : ` in ${label}`}.`;
    }

    if (updateAddress) {
      const nextHash = selectedCategory === "all" ? "" : `#${selectedCategory}`;
      history.replaceState(null, "", `${location.pathname}${nextHash}`);
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter, true));
  });

  const initialHash = decodeURIComponent(location.hash.slice(1));
  const initialCard = galleryCards.find((card) => card.id === initialHash);
  const initialCategory =
    initialCard?.dataset.category ??
    (filterNames.has(initialHash) ? initialHash : "all");

  applyFilter(initialCategory);

  if (initialHash && initialCard && initialCategory !== "all") {
    requestAnimationFrame(() => initialCard.scrollIntoView({ block: "center" }));
  }
}
