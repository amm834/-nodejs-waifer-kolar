const http = require('http');
const fs = require('fs')

const port = 3000

const readableStream = fs.createReadStream('dummy.txt', 'utf-8')
const handler = (req, res) => {
	readableStream.pipe(res)
}

const server = http.createServer(handler)
server.listen(port, () => {
	console.log('Server is running at http://localhost:3000')
})