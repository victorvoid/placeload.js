bin        = $(shell npm bin)
sjs        = $(bin)/sjs
VERSION    = $(shell node -e 'console.log(require("./package.json").version)')

bundle_mac: macros/*.js
	cat macros/*.js > macros/index.sjs

bundle_css: macros/*.js
	cat docs/css/*.css > docs/css/index.css

bundle_js: macros/*.js
	cat docs/js/*.js > docs/js/index.js

publish: bundle test
	npm install
	npm publish
