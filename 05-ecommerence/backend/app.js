import 'dotenv/config'
import mongoose from "mongoose";
import * as gallery from "./controllers/GalleryController.js"

await mongoose.connect(process.env.MONGO_URI)

gallery.save({
	name: "some.jpg"
})
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})

gallery.all().then(res => console.log(res))