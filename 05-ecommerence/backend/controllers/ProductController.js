import Product from "../models/Product.js";


const save = (product) => {
	return Product.create(product)
}

const destory = (_id) => {
	return Product.findOneAndDelete({_id})
}

const paginate = (page, limit) => {
	const options = {
		page,
		limit,
		sort: {_id: -1},
		lean: true
	};
	return Product.paginate({}, options)
}


export {save, destory, paginate}