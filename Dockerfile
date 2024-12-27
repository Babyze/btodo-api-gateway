FROM node:latest

WORKDIR /usr/apps/api-gateway

COPY ./  ./

RUN npm run install-all