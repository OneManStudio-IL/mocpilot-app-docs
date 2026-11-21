# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

A push to `main` publishes the site: `.github/workflows/deploy.yml` builds it and uploads it to our server, which serves https://doc.mocpilot.com. Nothing else deploys the site.

The old copy on GitHub Pages (`gh-pages` branch) is no longer updated; it stays online only for older app versions that still link to it.
