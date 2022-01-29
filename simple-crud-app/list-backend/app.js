import express from 'express'
import * as http from "http";
import 'dotenv/config'
import bodyParser from "body-parser";

const app = express();
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

server.listen(process.env.PORT, () => {
	console.log('Server is running on http://localhost:%d', process.env.PORT);
})