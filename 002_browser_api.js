setTimeout(() => {
	console.log('Hello from setTimeout()')
}, 1000)

let i = 0;
let interval = setInterval(() => {
	if (i === 5) clearInterval(interval)
	console.log(`Hello From setInterval() - ${i++}`)
}, 1000)