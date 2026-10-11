# JCDesigns

Portfolio site for Jack Carlin — built with Jekyll and hosted on GitHub Pages at https://jcdesigns829.github.io.

## Structure

- `index.html`, `about.html`, `artwork.html`, `resume.html`, `contact.html` — pages
- `digitalpaintings.html`, `graphicdesign.html`, `basicpaintings.html` — category pages
- `css/styles.css` — all styles
- `scripts/script.js` — mobile menu, artwork filter, lightbox
- `images/` — artwork and site images
- `_data/work.yml` — the list of artwork; **add new pieces here**
- `_layouts/default.html`, `_includes/` — shared page shell, header, footer, gallery

## Adding artwork

1. Put the image in `images/` (keep it under ~2000px on the long side).
2. Add an entry to `_data/work.yml` with `title`, `category`, `image` and `alt`.
3. Commit and push to `main` — GitHub Pages rebuilds automatically.

## Run locally

Requires Ruby 3+.

```sh
bundle install
bundle exec jekyll serve
```
