FROM node:8.10

WORKDIR /code

ADD . .

RUN npm install

EXPOSE 3000

CMD npm start