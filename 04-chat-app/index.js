import express from "express";
import * as http from "http";
import 'dotenv/config'
import {router} from "./router.js";


const app = express()
const server = http.createServer(app);
app.use(router)

server.listen(process.env.PORt, () => {
	console.log('Server is running')
})