import mongoose from "mongoose";

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
