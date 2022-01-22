const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	const path = req.url

	let readableStream;

	res.writeHead(200, {
		'content-type': 'text/html'
	})
	switch (path) {
		case '/':
			readableStream = fs.createReadStream('index.html')
			break;
		case '/about':
			readableStream = fs.createReadStream('about.html')
			break;
		case '/api/names':
			res.writeHead(200, {
				'content-type': 'application/json'
			})
			readableStream = fs.createReadStream('api.names.json')
			break;
		default:
			readableStream = fs.createReadStream('404.html')
			res.writeHead(404, {
				'content-type': 'text/html'
			})
	}
	readableStream.pipe(res)
})

server.listen(3000, () => {
	console.log('Server is running at http://localhost:3000')
})