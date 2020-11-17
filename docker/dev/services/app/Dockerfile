FROM node:lts-alpine

ENV NODE_ENV=development

RUN apk add git

RUN npm install -g @vue/cli

VOLUME /code

WORKDIR /code

EXPOSE 8080
