const fs = require('fs')

fs.writeFileSync('dummy.txt', 'This is write file sync\n')
const dummyText = fs.readFileSync('dummy.txt').toString()
console.log(dummyText)
fs.appendFileSync('dummy.txt', 'Append data')