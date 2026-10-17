# JCDesigns

A static portfolio site for Jack Carlin, built with Jekyll, HTML, CSS, and JavaScript. GitHub Pages builds and publishes the site at https://jcdesigns829.github.io/.

## Pages

- `index.html` is the home page.
- `logo-project.html` is the JC Designs logo case study.
- `artwork.html` is the filterable artwork gallery.
- `about.html`, `resume.html`, and `contact.html` are the portfolio pages.
- `Gemfile` pins the site to Jekyll 4.x; `.ruby-version` selects Ruby 3.3.6.
- The appearance toggle supports system light/dark preferences and remembers a manual choice in the browser.

## Updating the gallery

Gallery items live in `artwork.html`. Each `.gallery-card` has a `data-category` value matching one of the category filters. Add new images to the repository and update the card's image, alternative text, title, category, and unique anchor ID together. The senior thesis pieces are stored in `assets/`.

The original school artwork files are kept at the repository root. The supplied senior thesis pieces are in `assets/`; their original PNGs are preserved, and local WebP versions are used when a browser supports them. Replace a PNG and regenerate its matching WebP to update one of these images.

## Build locally

Install Ruby 3.3.6 and Bundler, then run:

```sh
bundle install
bundle exec jekyll build
```

Jekyll writes the generated site to `_site/`. To preview it locally, run `bundle exec jekyll serve` and open the URL printed by Jekyll.

## Publish with GitHub Pages

This repository is published with GitHub Pages from the `main` branch (root folder), under **Settings → Pages**. GitHub builds the site with Jekyll and deploys each update pushed to `main`, usually within a minute or two.

Images in this repository have had their hidden metadata (such as GPS location) removed. Strip metadata from new photos before adding them.
