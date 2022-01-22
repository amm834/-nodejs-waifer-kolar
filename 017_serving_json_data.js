const http = require('http')

http.createServer((req, res) => {
	const person = {
		name: "Aung Myat Moe",
		age: 18,
		job: "Student"
	}
	const json = JSON.stringify(person)
	res.writeHead(200, {
		'content-type': 'application/json'
	})
	res.end(json)
}).listen(3000, () => {
	console.log('Server is running at http://localhost:3000')
})