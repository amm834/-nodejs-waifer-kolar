import mongoose from "mongoose";
import {Product} from "./Product.js";

const {Schema} = mongoose
const OrderSchema = new Schema({
	uid: mongoose.Types.ObjectId,
	ords: String,
	since: Date
})

export const Order = mongoose.model('order', OrderSchema)

export const saveOrder = async (obj) => {
	obj['since'] = Date.now();
	return Order.create(obj)
}

export const findOrderById = async (_id) => {
	const order = await Order.findById({_id})
	const ords = JSON.parse(order.ords)
	const products = []
	for (const ordsKey in ords) {
		const productId = mongoose.Types.ObjectId(ordsKey)
		const product = await Product.findById({_id: productId})
		products.push(product)
	}
	return products;
}