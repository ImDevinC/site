---
title: "Hugo Dockerfile"
date: 2021-09-25T19:49:21Z
description: "Before we start, we have to know how to start!"
showToc: true
---
### Why Hugo?
It's been awhile since a refresh, and rather than continue rehasing the latest cool new thing to show off the same few projects, I figured why not just move to a blog style format that allows for quick posts and discussing whatever cool thing I've been up to. I did a bit of research and while the standard for markdown to blog seems to Jekyll, I've been on a golang kick recently and figured I'd focus on something built in go. I quickly stumbled across [Hugo](https://gohugo.io/), which is what this is running on, but there's no "official" docker image and rather than use what someone else provides, I figured why not build one to get this process started. It's a pretty straightforward process, but I need content, and this is a great way to start some.

### Getting started
To start, there are precompiled binaries for multiple arch's, and for simplicity sake we'll start with Ubuntu. Spinning up a simple Dockerfile like the one below got me up and running very quickly.
```
FROM ubuntu:latest

RUN apt-get update && apt-get install hugo -y

EXPOSE 1313

ENTRYPOINT ["hugo"]

CMD ["version"]
```
This image doesn't actually start anything, just runs the version command. But it allows us to make sure the system runs as expected.

I then browsed through the available [themes](https://themes.gohugo.io/) and stumble across PaperMod which is a nice minimalist theme with a default dark option. I downloaded the theme per the instructions, which was very simple, and changed the config file to use the new theme. This is where the first issue cropped up.

### Versioning? Who needs versioning?
PaperMod requires Hugo version >= 0.82.0, but apparently the version on the Ubuntu PPA is pretty outdated. So now we look at other options. I could've probably used another pre-built image for another arch, but figured why not just use the source. In this case, I refactored the image to download a specified release version and then built a new stage that only copies over the downloaded binary. So now our Dockerfile looks like this:
```
FROM ubuntu:latest as builder

RUN apt-get update && apt-get install curl ca-certificates -y

ENV HUGO_VERSION="0.88.1"

WORKDIR /tmp

RUN curl -L "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz" -o "hugo.tar.gz" && \
    tar xvzf hugo.tar.gz

FROM ubuntu:latest as server

COPY --from=builder /tmp/hugo /usr/bin/hugo

RUN chmod +x /usr/bin/hugo

WORKDIR /usr/src/app

EXPOSE 1313

ENTRYPOINT ["hugo"]

CMD ["version"]
```
A couple notes:
  + I specified `HUGO_VERSION` as an environment variable so in the future I can easily update the version of Hugo without needing to change inline URL's. Not a huge deal, but definitely a nice quality of life change.
  + Due to the nature of how Hugo works, compiling your files into static assetes, I could've done this in a single-stage build. However I like to keep myself fresh on good practices so multi-stage was used here to keep the image clean.

So at this point, I can run the recommend command of `hugo site new quickstart`. Since we're running in Docker, and we want our changes to persist, I'm using the following command:
`docker run -it -v ${PWD}:/usr/src/app/quickstart hugo site new quickstart`. The volume configuration will make sure my Hugo files are stored in the same folder as my Dockerfile.

### That darn `root`
Now that the default site files are in place, it's time to start writing my first post (this one)! However one thing I quickly noticed was that all the files that Hugo created are owned by root, meaning I can't easily edit them without either `chown`'ing them or using `sudo`. Neither of these are difficult, but are also not ideal. So let's go back to Docker and change the we're using to make these files more accessible.

```
FROM ubuntu:latest as builder

RUN apt-get update && apt-get install curl ca-certificates -y

ENV HUGO_VERSION="0.88.1"

WORKDIR /tmp

RUN curl -L "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz" -o "hugo.tar.gz" && \
    tar xvzf hugo.tar.gz

FROM ubuntu:latest as server

COPY --from=builder /tmp/hugo /usr/bin/hugo

RUN chmod +x /usr/bin/hugo

WORKDIR /usr/src/app

RUN useradd -ms /bin/bash hugo

USER hugo

EXPOSE 1313

ENTRYPOINT ["hugo"]

CMD ["version"]
```
Now that we've added the `hugo` user and we switch to that user, the files will be created with the first UID and GID available on the system. That's 1000:1000, which also happens to my ID's on my single user system, so we're gonna stick with this. Now when I run the same command as above, all the files are owned by me and we can get properly started.

### Now we're cooking with grease!
To test my changes quickly, I run a new Docker command to get the Hugo server running locally. `docker run -p 1313:1313 -v ${PWD}:/usr/src/app hugo server --bind 0.0.0.0`. This command starts the Hugo server, listening to all addresses (since we're in Docker) and also mounts my files back to the right directory.

I read the [documentation](https://adityatelange.github.io/hugo-PaperMod/) for PaperMod to understand what options I wanted and verified that as I changed them, the template updated in my browser as well. I also used `docker run -v ${PWD}:/usr/src/app hugo new posts/my-first-post.md` to create my first new post and filled in content. In true [Spaceballs](https://www.imdb.com/title/tt0094012/) fashion, the first post I made is actually this post I'm writing right now.

### Better... stronger... faster
So now we have our application, our theme, and our first post. We've verified we can view the content when we run our server locally. But to get the best use of Hugo, let's generate a static site so we can upload those files. This is done simply by running `docker run -v ${PWD}:/usr/src/app hugo -D`. This creates a new `public` folder that has our static content underneath it, and these files can be uploaded to my server. I'll leave that process to another blog entry, but the basic premise is just copy everything under the new `public` folder to the `www` folder on my server. 

### UNLIMITED POWER!
So now that we have everything setup, the last piece is to automate the deployment process. As I've been kicking around with Github Actions recently, let's put together a new action that will do three steps:
1. Run our Dockerfile with the `-D` option to generate our static assets.
1. Copy the files out of the new container.
1. Copy the files to our server.

This is pretty straightforward, and you can see the Github Action file on [Github](https://github.com/ImDevinC/site/.github/workflows/publish.yaml).

### Wrapping it up
Although this took me a bit longer than originally anticipated (I have a tendency to let scope creep catch me), I'm very excited I set this up in this fashion. At this point, I can work on new blog posts from anywhere, let them sit in a branch to marinate over any thoughts I may have, and on merge they'll automatically be deployed! Hopefully this encourages me to write more, and hopefully encourages more people to read more content.

Thanks for being on this journey with me!