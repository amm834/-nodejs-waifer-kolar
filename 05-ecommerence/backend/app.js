import 'dotenv/config'
import mongoose from "mongoose";
import * as product from './controllers/ProductController.js'

await mongoose.connect(process.env.MONGO_URI)

product.paginate(1, 50)
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})