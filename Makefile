bin        = $(shell npm bin)
sjs        = $(bin)/sjs
VERSION    = $(shell node -e 'console.log(require("./package.json").version)')

bundle: macros/*.js
	cat macros/*.js > macros/index.sjs

publish: bundle test
	npm install
	npm publish

