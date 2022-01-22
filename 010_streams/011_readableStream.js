const fs = require('fs')
const readableStream = fs.createReadStream('dummy.txt')

readableStream.on('data',chunk => {
	console.log(chunk.toString())
})