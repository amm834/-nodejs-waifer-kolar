const fs = require('fs')

let filename = 'dummy.txt'

fs.writeFileSync(filename, 'Writing data from write file\n', (err) => {
	if (err) throw new Error(err)
	console.log('File writing to %s is success', filename)
})

fs.readFile(filename, 'utf-8', (err, data) => {
	if (err) throw new Error(err)
	console.log(data)
})

fs.appendFile(filename, 'Appened data', 'utf-8', (err) => {
	if (err) throw new Error(err)
	console.log('Data was appended')
})