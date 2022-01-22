const fs = require('fs')

const readableStream = fs.createReadStream('dummy.txt', 'utf-8')
const writableStream = fs.createWriteStream('pipedDummy.txt', 'utf-8')
readableStream.on('data', () => {
	readableStream.pipe(writableStream)
})