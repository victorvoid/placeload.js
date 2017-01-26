bin        = $(shell npm bin)
sjs        = $(bin)/sjs
VERSION    = $(shell node -e 'console.log(require("./package.json").version)')

bundle: macros/*.js
	cat macros/*.js > macros/index.sjs

bundlecss: macros/*.js
	cat docs/css/*.css > docs/css/index.css

bundlejs: macros/*.js
	cat docs/js/*.js > docs/js/index.js

publish: bundle test
	npm install
	npm publish
