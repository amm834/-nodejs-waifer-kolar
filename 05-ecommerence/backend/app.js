import 'dotenv/config'
import mongoose from "mongoose";
import * as user from './controllers/UserController.js'

await mongoose.connect(process.env.MONGO_URI)

const userObj = {
	name: "Aung Myat Moe",
	email: "amm@gmail.com",
	password: "password",
	since: Date.now()
}

user.save(userObj)
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})

user.all()
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})