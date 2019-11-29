
setup:
	npm install http

build:
	echo "nothing to build, please make sure something in it to build"

run:
	node index.js

dockertest:
	make setup
	make build
	make run

