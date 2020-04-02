import {Server} from "./app/Server";
import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

const port = process.env.PORT? +process.env.PORT: 8080;

const server = new Server(app);
console.log(port);
server.start(port);