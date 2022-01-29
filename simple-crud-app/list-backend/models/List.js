import * as mongoose from "mongoose";

const {Schema} = mongoose;
const ListSchema = new Schema({
	task: {type: string, required: true},
	since: {type: Date, required: true}
})

const List = mongoose.model('List', ListSchema)

export default List;