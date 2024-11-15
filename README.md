# simple-ebook-reader

## Tools

* Vue.js & Nuxt.js
* Typesciprt
* TailwindCSS
* Nuxt I18n
* PWA

## Features
* Dark mode supported
* Reading mode supported
* Multiple languages supported
* Change font size supported
* Change font family supported
* Store ebook name and content on LocalStorage of Browser supported

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deploy in Heroku
```bash
npm install typescript &&  npm run build && heroku create simple-ebook-reader && heroku config:set NPM_CONFIG_PRODUCTION=false && heroku config:set HOST=0.0.0.0 && heroku config:set NODE_ENV=production && git rm package-lock.json && git push heroku main 
```
