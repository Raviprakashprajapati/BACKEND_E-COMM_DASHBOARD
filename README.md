# BACKEND_E-COMM_DASHBOARD CRUD OPERATION

This repository contains the backend API for an Ecommerce web application built using Node.js. The API provides various routes for user authentication, product management, and product search. The application allows users to register, log in, add products, retrieve product lists, and search for specific products.All data is stored in a MongoDB Atlas cloud database for secure and reliable data storage.


This backend API is designed to support the frontend Ecommerce application. It provides endpoints for user authentication, product management, and product search. User data, including product details, is stored in a MongoDB Atlas cloud database for secure and reliable data storage.


FEATURES--------------
User Registration: Users can register with their name, email, and password.


User Login: Registered users can log in using their email and password.


Add Product: Authenticated users can add new products with details like name, price, and category.


Product List: Users can retrieve a list of all available products.


Product Search: Users can search for specific products based on keywords.


Prerequisites------


Before running the application, ensure you have the following installed:

Node.js - Download and install Node.js from the official website (https://nodejs.org).
MongoDB Atlas Account - Sign up for a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas) to create a cluster and obtain the connection URI.


ROUTES-------


The backend API provides the following routes:

/register (POST)


Allows users to register by sending a JSON payload with the following fields:

name: User's name.


email: User's email address.


password: User's password.


/login (POST)


Allows users to log in by sending a JSON payload with the following fields:

email: User's registered email address.


password: User's registered password.


/add-product (POST)


Allows authenticated users to add a new product by sending a JSON payload with the following fields:

name: Product's name.


price: Product's price.


category: Product's category.


/products (GET)


Allows users to retrieve a paginated list of all available products from MongoDB Atlas.

/search (GET)


Allows users to search for products by providing a query parameter for keywords. The search data is retrieved from MongoDB Atlas.


Installation---------------


Clone this repository to your local machine.


Navigate to the project directory using the terminal or command prompt.


Run the following command to install the required dependencies:

npm install


Configuration


Before running the application, you need to set up the configuration for MongoDB Atlas. Create a .env file in the root directory of the project and add the following environment variables:


