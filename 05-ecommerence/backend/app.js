import 'dotenv/config'
import mongoose from "mongoose";
import * as hasher from './utils/hasher.js'

await mongoose.connect(process.env.MONGO_URI)

const some = 'password'
hasher.hash(some)
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})

const hash = '$2b$10$kIj5FQKwMHPWChpIHSE5IOuO.PNP38pnPE9VIaJK5vu8th.D/TgSK'
hasher.compare(some, hash)
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})