# JCDesigns

A static portfolio site for Jack Carlin, built with Jekyll, HTML, CSS, and JavaScript. Cloudflare Pages builds and publishes the generated site.

## Pages

- `index.html` is the home page.
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

## Publish with Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages using **Workers & Pages → Create application → Pages → Connect to Git**. Choose the `main` branch for production deployments. Set the build command to `bundle exec jekyll build` and the build output directory to `_site`. Set the `JEKYLL_ENV` environment variable to `production` and `RUBY_VERSION` to `3.3.6`, matching `.ruby-version`. Cloudflare Pages then builds and deploys each update pushed to `main`. Preview deployments can be enabled for pull requests.

The GitHub Actions workflow in `.github/workflows/jekyll.yml` separately builds the site for pull requests and pushes to `main`. Cloudflare account access and the Pages project/domain are configured in the Cloudflare dashboard; no Cloudflare credentials are stored in this repository.
