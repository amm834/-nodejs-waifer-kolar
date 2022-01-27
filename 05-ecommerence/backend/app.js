import 'dotenv/config'
import mongoose from "mongoose";
import * as category from './controllers/CategoryController.js'

await mongoose.connect(process.env.MONGO_URI)

const catObj = {
	id: mongoose.Types.ObjectId("61f06d1aaf74e1af2325a5c5"),
}

category.destory(catObj.id)
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})


// const app = express()
// app.use(bodyParser.json())
//
// app.listen(process.env.PORT, () => {
// 	console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}`)
// })