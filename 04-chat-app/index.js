const client = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/first'

const connector = (err, instance) => {
	if (err) throw err
	console.log(instance)
}

client.connect(url, connector)

