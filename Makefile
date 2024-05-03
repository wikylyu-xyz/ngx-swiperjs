

build:
	rm -rf dist
	ng build ngx-swiperjs

example: build
	ng s example

publish: build
	cd dist/ngx-swiperjs && npm publish --access=public