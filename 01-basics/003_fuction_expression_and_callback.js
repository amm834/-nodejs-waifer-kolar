function giveMeAFunction(cb) {
	cb()
}

const sayHi = () => {
	console.log('Hi!')
}

giveMeAFunction(sayHi)