FROM node:12.13-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080