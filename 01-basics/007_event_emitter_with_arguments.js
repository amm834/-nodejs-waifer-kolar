const events = require('events')
const eventEmitter = new events.EventEmitter()

eventEmitter.on('change', (name = '') => {
	console.log('Hello %s', name)
})

eventEmitter.emit('change', 'Aung Myat Moe')