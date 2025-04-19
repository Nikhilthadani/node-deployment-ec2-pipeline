FROM node:23.11.0-alpine

WORKDIR /usr/src/app/backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node","app.js" ]


