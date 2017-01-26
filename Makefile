bin        = $(shell npm bin)
sjs        = $(bin)/sjs
VERSION    = $(shell node -e 'console.log(require("./package.json").version)')

bundle: 
	cat dick.macros/*.js > dick.macros/index.js

bundle_css:
	cat docs/css/*.css > docs/css/index.css

bundle_js:
	cat docs/js/*.js > docs/js/index.js

publish: bundle test
	npm install
	npm publish
