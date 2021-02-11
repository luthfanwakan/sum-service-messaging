FROM node:12-alpine

WORKDIR /sum-service-messaging

COPY . /sum-service-messaging

RUN npm install

CMD ["node", "app.js"]