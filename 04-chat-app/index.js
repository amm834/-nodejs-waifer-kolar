const client = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/first'


const errorChecker = (err, instance) => {
	if (err) {
		console.log(err)
	} else {
		console.log("Good to go")
		console.log(instance)
	}
}

const createCollection = (name) => {
	client.connect(url, (error, instance) => {
		if (error) {
			throw error
		} else {
			const db = instance.db('first')
			db.createCollection(name, errorChecker)
		}
	})
}

const insert = (obj) => {
	client.connect(url, (error, instance) => {
		if (error) {
			throw error
		} else {
			const db = instance.db('first')
			db.collection('users').insertMany(obj, errorChecker)

		}
	})
}

// insert([
// 	{name: "Mg MG", email: "mgmg@gmail.com", age: 123},
// 	{name: "Mg MG", email: "mgmg@gmail.com", age: 123, adresss: "Letpadan"},
// 	{name: "Mg MG", email: "mgmg@gmail.com", age: 123},
// 	{name: "Mg MG", email: "mgmg@gmail.com", age: 123},
// ])

const findUser = () => {
	client.connect(url, (error, instance) => {
		if (error) {
			throw error
		} else {

			const db = instance.db('first')
			// get one
			// db.collection('users').findOne({}, errorChecker)

			// get all
			// db.collection('users').find({}).toArray(errorChecker)

			// filter by query
			// const query = {name: "Aung Aung"}
			// db.collection('users').find(query).toArray(errorChecker)

			// get specific data of user
			db.collection('users').find({}, {
				projection: {
					_id: 0,
					name: 1
				}
			}).toArray(errorChecker)
		}
	})
}

const sortUser = () => {
	client.connect(url, (err, instance) => {
		const db = instance.db('first')
		db.collection('users').find().sort({
			name: -1
		}).toArray(errorChecker)
	})
}

sortUser()