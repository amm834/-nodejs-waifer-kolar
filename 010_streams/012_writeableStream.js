const fs = require('fs')

const readableStream = fs.createReadStream('dummy.txt')
const writableStream = fs.createWriteStream('newDummy.txt')

readableStream.on('data', chunk => {
	writableStream.write(chunk)
})
