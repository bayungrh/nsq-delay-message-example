FROM node:12-alpine

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app/

COPY . /app/

RUN npm install
RUN npm install nodemon -g

CMD [ "nodemon", "consumer.js" ]