# Source code for static website
Source code for caoadvisoryllc.com

## Notes:
- npm installing on the dev side will return audit issues. This is an expected issue with `webpack-dev-server`, and can generally be ignored (since it's only a tool used in dev environment for locally previewing the webapp; it's not relevant for prod environment)
  - use `npm audit --omit=dev` to check for prod environment issues, aka the issues that really matter

## Troubleshooting
- If the Deploy workflow/GitHub action fails, rerun all failed workflows. It sometimes fails for some reason, but then succeeds when rerun.
  - Expected error messages in this case:
    - `error: failed to push some refs to 'https://github.com/CAO-Advisory-LLC/cao-advisory-llc.github.io.git'
      hint: Updates were rejected because the remote contains work that you do not have locally. This is usually caused by another repository pushing to the same ref. If you want to integrate the remote changes, use 'git pull' before pushing again. See the 'Note about fast-forwards' in 'git push --help' for details. Error: Action failed with "The process '/usr/bin/git' failed with exit code 1"`

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
