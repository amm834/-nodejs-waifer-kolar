import express from 'express'
import * as http from "http";
import 'dotenv/config'
import bodyParser from "body-parser";
import Router from './routes/todo.js'

const app = express();

const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Router);

server.listen(process.env.PORT, () => {
	console.log('Server is running on http://localhost:%d', process.env.PORT);
})