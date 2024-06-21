FROM node:slim
WORKDIR /order/app
COPY . /order/app
RUN npm install
EXPOSE 4003
CMD [ "node", "app.js" ]