# LibraryManagement_Microservices

It is a Microservice Achitecture based library management system
It is Core Nodejs based Microservice Based Application

The Project consist of three sub module
1. Book Module
    -- Book module contains all the book related CRUD API
    -- In this we are using MongoDB as database for storing book details

2. Customer Module
    -- Customer module contains all the customer related CRUD API
    -- In this we are using MongoDB as database for storing customer details

3. Order Module
    -- Order module contains all the Order related CRUD API
    -- In this we are using MongoDB as database for storing customer details


## Project Setup ( Instructions )

---

To run the application you need to have Node JS installed.


1. Install all node-modules in every module

```
npm i
```

2. run the backend Server in every module

```
npm run watch
```

3. Setup MongoDB Atlas and change URL in every module in there respective main file were express server is created

4. In MongoDB Atal make Three Database - book, customer, order (No Need to create Collection it will create it automatically)

## Tech Stack Used

- Node.js, Express.js, Microservices Architecture, MongoDB, Docker, Nginx

## Future Scope

- Can Create UI/UX for the Application and show it in a good manner.
- Can Upgrade the Achitecture to Docker or kubernetes.