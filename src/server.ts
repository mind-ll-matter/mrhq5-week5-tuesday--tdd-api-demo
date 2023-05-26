// // yarn init -y
//
// ts-node allows us to run typescript files. ts-node-dev is a better version that watches for file changes and compiles them.
// @types/node allows our editor to know what's in node. And @types/express allows us to know what's in express. @types allows to use intellisense (autocomplete and info of the documentation when hovering over things)
// // yarn add -D typescript ts-node-dev @types/node @types/express
//
// // yarn add express dotenv
// // mkdir src
// // touch src/server.ts

// tsnd is a shortcut for ts-node-dev which allows us to run the file server.ts
// // In package.json, underneath "scripts", add "dev": "tsnd src/server.ts"
// now run yarn dev to run the server.ts file
// // yarn dev

// // mkdir tests
// // touch src/tests/tasks.spec.ts

// NOW BEGINS THE TESTING

// // yarn add -D ts-jest @types/jest
// // (IF USING NPM...) npm i -D ts-jest @types/jest

// the below creates the jest config file.
// // yarn ts-jest config:init

// inside the package.json file, in scripts, write... "test": "jest"
// // yarn test

// CREATE LOCAL REPO
// // git init -b main
// // touch .gitignore
// // git add .
// // git commit -m "<ENTER COMMIT MESSAGE>"

// CONNECT & PUSH TO REMOTE REPO (AFTER CREATING IT ON GITHUB)
// // git remote add origin <URL>
// // git branch -M main
// // git push -u origin main

// CREATE A NEW FEATURE BRANCH
// // git checkout -b feature/fix-stests
// // git push

import express from "express";
import env from "dotenv";
import { getAllTasks } from "./controllers/taskController";

env.config();

const server = express();
server.use(express.json());

server.use("/api/tasks", getAllTasks);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server starterd on port ${PORT}`);
});

// we put the request and response handling inside the controller so that our services are RETURNing something - which can be tested by out test files.

// we have to have the tsconfig file so that Typescript knows where to find the TS files and where we want Typescript to compile and save JavaScript files.
