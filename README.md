# Source code for static website
Source code for caoadvisoryllc.com

## npm (dev) commands
`npm install` to install all dev dependencies.<br>
`npm outdated` to check if any packages are outdated.<br>
`npm update` to update outdated packages.

`npm run dev` to open a webpack server for viewing changes in real time without needing to build (server link: http://localhost:8080/).<br>
`npm run build` to bundle everything in `src` into `dist`.<br>
`npm test` to run all jest tests.

## List of packages used:
- webpack
  - module bundler
- webpack-cli
  - module bundler
- html-webpack-plugin
  - bundling for html
- style-loader
  - bundling for css
- css-loader
  - bundling for css
- html-loader
  - bundling of images loaded via image files (images from urls are covered by css-loader)
- webpack-dev-server
  - previewing webapp before building it
- eslint
  - linter, code styling
- prettier
  - formatter, code layout formatter
- jest
  - testing functions
- babel
  - to fix jest's issues with imports
