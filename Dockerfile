FROM node:10
EXPOSE 8081
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node/app
RUN chown node:node /home/node/app
USER node
COPY . .
RUN npm install -g polymer-cli --only=production && npm install --only=production
CMD ["polymer", "serve", "-H", "0.0.0.0"]