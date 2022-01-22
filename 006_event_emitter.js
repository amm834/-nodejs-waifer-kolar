const events = require('events');
const eventEmitter = new events.EventEmitter();

// register event
eventEmitter.on('change', () => {
	console.log('Changing event is triggered')
})

let i = 0;
setInterval(() => {
	i++;
	if (i % 3 === 0) {
		// trigger event
		eventEmitter.emit('change')
	}
}, 1000)