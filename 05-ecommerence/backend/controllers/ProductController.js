import Product from "../models/Product.js";

const save = (product) => {
	return Product.create(product)
}

const destory = (_id) => {
	return Product.findOneAndDelete({_id})
}


export {save, destory}