FROM node:carbon-alpine

WORKDIR /opt/fakesmtp

COPY package.json ./

RUN npm install

EXPOSE 1025
EXPOSE 1080

CMD npm run smtp
