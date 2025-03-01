FROM node:current-alpine3.20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY ./src ./

EXPOSE 8080

CMD [ "npm","run","start" ]