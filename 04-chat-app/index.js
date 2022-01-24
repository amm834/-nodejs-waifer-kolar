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

const rooms = {
	PUBLIC: 'public',
	PRIVATE: 'private'
}

io.on('connection', (socket) => {
	socket.on('login', (username) => {
		socket.username = username
		socket.emit('logged-in-success', {
			status: true
		})

		if (username == 'x' || username == 'y') {
			socket.room = rooms.PRIVATE
			socket.join(rooms.PRIVATE)
		} else {
			socket.room = rooms.PUBLIC
			socket.join(rooms.PUBLIC)
		}

		socket.on('send-message', message => {
			io.in(socket.room).emit('send-message', username + ":" + message)
			// socket.emit('send-message', username + ":" + message)
		})
	})
})


app.get('/', (req, res) => {
	res.sendFile('index.html')
})

server.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT}`)
})



