FROM node:16.14.0-stretch-slim

WORKDIR /usr/src/app/
RUN ls
RUN rm -rf ./*
COPY package*.json ./
RUN node -v
RUN npm install --registry=https://registry.npm.taobao.org
COPY . .

RUN ls ./node_modules
# start app
EXPOSE 8080
CMD "npm" "run" "start"
