import 'dotenv/config'
import mongoose from "mongoose";
import {getProducts} from "./controllers/CategoryController.js";

await mongoose.connect(process.env.MONGO_URI)

getProducts('products', 'id', 'cat_id')
	.then(res => {
		console.log(res[0])
	})
	.catch(err => {
		console.log(err)
	})
