const client = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/first'


const errorChecker = (err, instance) => {
	if (err) {
		console.log(err)
	} else {
		console.log(err)
	}
}

const createCollection = (name) => {
	client.connect(url, (error, instance) => {
		if (error) throw error
		else {
			const db = instance.db('first')
			db.createCollection(name, errorChecker)
		}
	})
}


createCollection('users')