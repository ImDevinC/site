## Update Resume
```bash
docker build -t resume -f Dockerfile.resume .
docker run -v $PWD/static:/usr/src/app resume export resume.html --theme jsonresume-theme-rocketspacer
```