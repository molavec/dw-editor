# Digital Writer Editor

A fast web editor for creative writers.


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```


## Typescript Notes

* How to fix "Flag 'importsNotUsedAsValues' is deprecated and will stop functioning in TypeScript 5.5."?

As vue package typecript options extends include `importsNotUsedAsValues` 

``` json
"extends": "@vue/tsconfig/tsconfig.web.json",
```

is necessary deactivate option and replace for new one `"verbatimModuleSyntax": true`

https://stackoverflow.com/questions/75449286/how-to-fix-flag-importsnotusedasvalues-is-deprecated-and-will-stop-functionin

## Eslint and Prettier Notes

Prettier custom options are deactivated in favor to eslint rules.