import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const {Schema} = mongoose;

const ProductSchema = new Schema({
	cat_id: {type: Number, required: true},
	name: {type: String, required: true},
	price: {type: Number, required: true},
	image: {type: String, required: true},
	description: {type: String, required: true},
	since: {type: Date, required: true}
})

ProductSchema.plugin(mongoosePaginate)

const Product = mongoose.model('Product', ProductSchema)


const save = (product) => {
	product['since'] = Date.now()
	return Product.create(product)
}

const destory = (_id) => {
	return Product.findOneAndDelete({_id})
}

const paginate = (start, count) => {
	const options = {
		page: start,
		limit: count,
		sort: {_id: -1},
		lean: true
	};
	return Product.paginate({}, options)
}


export {save, destory, paginate}