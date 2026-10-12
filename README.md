# JCDesigns

A small, static portfolio site for Jack Carlin. Built with plain HTML, CSS, and JavaScript so it can be hosted directly on GitHub Pages without a build step.

## Pages

- `index.html` is the home page.
- `artwork.html` is the filterable artwork gallery.
- `about.html`, `resume.html`, and `contact.html` are the portfolio pages.

## Updating the gallery

Gallery items live in `artwork.html`. Each `.gallery-card` has a `data-category` value matching one of the category filters. Add new images to the repository and update the card's image, alternative text, title, category, and unique anchor ID together. The senior thesis pieces are stored in `assets/`.

The original school artwork files are kept at the repository root. The supplied senior thesis pieces and brand logo are in `assets/`; their original PNGs are preserved, and local WebP versions are used when a browser supports them. Replace a PNG and regenerate its matching WebP to update one of these images.

## Local preview

Open `index.html` in a browser, or serve the repository root with a local static-file server. No package installation or build command is required.
