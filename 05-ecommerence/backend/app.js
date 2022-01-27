import 'dotenv/config'
import mongoose from "mongoose";
import {destory} from "./controllers/ProductController.js";

await mongoose.connect(process.env.MONGO_URI)


const productObj = {
	cat_id: 1,
	name: "Product1",
	price: 2000,
	description: "Hello product one",
	since: Date.now()
}

destory(mongoose.Types.ObjectId("61f20fe5cb5380706a305476"))
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})