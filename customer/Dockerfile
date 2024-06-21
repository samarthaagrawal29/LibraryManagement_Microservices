FROM node:slim
WORKDIR /customer/app
COPY . /customer/app
RUN npm install
EXPOSE 4002
CMD [ "node", "app.js" ]