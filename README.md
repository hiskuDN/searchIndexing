# Search Your Vitamin

* This project is a React/Node based Search Indexing site that uses React (with typescript)
for frontend and Pure Node for the back end.
* Author: Hiskias Dingeto
* Contact: hisias.melke1@gmail.com

## Running Configuration
* To run this app please follow the following guidelines for client side
    * Go to `/client`, open terminal or command prompt and execute `npm install` 
    or `yarn install` to get the required dependencies
    * On your terminal, run `npm start` or `yarn start`
    * Client side development server will be started on `localhost:3000`
    * !!!!!Please install a CORS bypassing plugin to avoid CORS blocing issues!!!!!

* To run this app please follow the following guidelines for client side 
    * Go to `/server-node`, open terminal or command prompt and execute `npm install` 
        or `yarn install` to get the required dependencies
    * On your terminal, run `npm start` or `yarn start`
    * Server side development server will be started on `localhost:3004`
    
* Add data on server side to the excel file in `/server-node/assets/data.xlsx`
    
## Project Structure
* The server side project structure is as follows
    * `node_modules`: contain all dependencies
    * `src`: contain all server side code
        * `api`: contain request handlers that route the request from client
        * `assets`: contain excel database
        * `models`: contain data models for the imported data
        * `services`: contain reusable business logic of the backend
* Used external libraries on the backend are as follows
    * `babel`: JavaScript "transpiler" that converts a newer version of JavaScript (ES6+) 
    to a version node can understand
    * `nodemon`: development tool allowing automatic reload on file changes
    * `xlsx`: importing excel files and converting them to JSON dataformat