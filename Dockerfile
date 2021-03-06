FROM node:latest

ADD . /app
WORKDIR /app
RUN npm install

EXPOSE 9000

CMD ["npm", "start"]