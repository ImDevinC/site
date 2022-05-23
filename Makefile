.PHONY: docker-dev

docker-dev:
	docker build -t site -f Dockerfile.dev .
	docker run -v ${PWD}:/usr/src/app -p 1313:1313 site server -D --bind=0.0.0.0