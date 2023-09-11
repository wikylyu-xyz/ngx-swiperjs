

build:
	rm -rf dist
	ng build ngx-swiperjs

example: build
	ng s example