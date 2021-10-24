import express from "express";
const path = require('path');
import dotenv from 'dotenv'; 
dotenv.config();
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./sockets.js";
// Server configuration
const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);
// static files
app.use(express.static(path.join(__dirname, 'public')));
// Database
require('./public/js/database');

// listening the Server
server.listen(5000);
console.log("Server on http://localhost:5000");

// Importa eventos
Sockets(io);