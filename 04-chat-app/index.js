import express from 'express'
import * as http from "http";
import 'dotenv/config'
import {Server} from 'socket.io'
import __dirname from './__dirname.cjs'
import * as path from "path";


const app = express()
app.use(express.static(path.join(__dirname, 'views')))
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
	res.sendFile('index.html')
})

io.on('connection', (socket) => {
	socket.on('login', (username) => {
		socket.emit('logged-in-success', {
			status: true
		})
	})
})

server.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT}`)
})



