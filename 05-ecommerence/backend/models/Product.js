import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const {Schema} = mongoose;

const ProductSchema = new Schema({
	cat_id: {type: Number, required: true},
	name: {type: String, required: true},
	price: {type: Number, required: true},
	description: {type: String, required: true},
	since: {type: Date, required: true}
})

ProductSchema.plugin(mongoosePaginate)

export default mongoose.model('Product', ProductSchema)