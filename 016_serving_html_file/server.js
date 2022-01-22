const http = require('http')
const fs = require('fs')

const readableStream = fs.createReadStream('index.html', 'utf-8')

const handler = (req, res) => {
	res.writeHead(200, {
		'cotent-type': 'text/html'
	})
	readableStream.pipe(res)
}
http.createServer(handler).listen(3000, () => {
	console.log('Server is running at http://localhost:3000')
})
