import 'dotenv/config'
import mongoose from "mongoose";
import * as user from './controllers/UserController.js'

await mongoose.connect(process.env.MONGO_URI)


user.findByEmail('amm@gmail.com')
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})