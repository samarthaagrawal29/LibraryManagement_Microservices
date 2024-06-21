FROM node:slim
WORKDIR /books/app
COPY . /books/app
RUN npm install
EXPOSE 4001
CMD [ "node", "app.js" ]