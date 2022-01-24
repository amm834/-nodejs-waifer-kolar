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

const publicNamespace = io.of('/public')
const privateNamespace = io.of('/private')

publicNamespace.on('connection', socket => {
	socket.on('public-message', data => {
		console.log('Public Message', data)
	})
})

privateNamespace.on('connection', socket => {
	socket.on('private-message', data => {
		console.log('Private Message', data)
	})
})


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



