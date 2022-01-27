import Category from "../models/Category.js";


const all = () => {
	return Category.find({});
}

const save = (category) => {
	return Category.create(category)
}

const update = (category) => {
	Category.findById(category.id, (error, doc) => {
		if (error) return Promise.reject(error)

		doc.name = category.name
		doc.save((error, doc) => {
			if (error) return Promise.reject(error)
			return Promise.resolve(doc)
		})
	})
}

const destory = (_id) => {
	return Category.findOneAndDelete({_id})
}

const getProducts = (from, localId, foreignId) => {
	return new Promise((resolve, reject) => {
		Category.aggregate([
			{
				$lookup: {
					from,
					localField: localId,
					foreignField: foreignId,
					as: 'cat_products'
				}
			}
		]).exec((error, result) => {
			if (error) reject(error)
			resolve(result)
		})
	})
}


export {all, save, update, destory, getProducts}