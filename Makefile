test:
	echo "Specifiy an option"

build:
	docker build -t ramez-app -f Dockerfile .

run:
	docker run -p 5000:5000 --name=ramez -d ramez-app

start:
	$(MAKE) build && $(MAKE) run

stop:
	docker stop ramez && docker rm ramez