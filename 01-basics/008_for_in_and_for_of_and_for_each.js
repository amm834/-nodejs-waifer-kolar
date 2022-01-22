const names = ['Mg Mg', 'Aung Aung', 'Moe Moe', 'Myat Myat', 'Hla Hla']

// for each (just ES6)
names.forEach(name => {
	console.log(name)
})

// for in
for (const index in names) {
	console.log(names[index])
}

// for of
for (const name of names) {
	console.log(name)
}