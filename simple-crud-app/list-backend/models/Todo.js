import mongoose from "mongoose";

const {Schema} = mongoose;
const TodoSchema = new Schema({
	task: {type: String, required: true},
	since: {type: Date, required: true}
})

export default mongoose.model('Todo', TodoSchema)

