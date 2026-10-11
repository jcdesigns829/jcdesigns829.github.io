# JCDesigns

Portfolio site for Jack Carlin — built with Jekyll and hosted on GitHub Pages at https://jcdesigns829.github.io.

## Structure

- `index.html`, `about.html`, `artwork.html`, `resume.html`, `contact.html` — pages
- `seniorthesis.html`, `graphicdesign.html`, `digitalillustration.html`, `digitalpaintings.html`, `basicpaintings.html`, `animation.html` — artwork sections
- `css/styles.css` — all styles
- `scripts/script.js` — mobile menu and lightbox
- `images/work/` — artwork; `images/` — logo, portrait, resume
- `_data/work.yml` — every piece of artwork; **add new pieces here**
- `_data/sections.yml` — the Artwork page sections and their cover images
- `_layouts/default.html`, `_includes/` — shared page shell, header, footer, gallery

## Adding artwork

1. Put the image in `images/work/` (keep it under ~2000px on the long side).
2. Add an entry to `_data/work.yml` with `title`, `section`, `image` and `alt` (add `featured: true` to show it on the home page).
3. Commit and push to `main` — GitHub Pages rebuilds automatically.

## Run locally

Requires Ruby 3+.

```sh
bundle install
bundle exec jekyll serve
```
