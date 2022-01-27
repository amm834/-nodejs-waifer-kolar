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


export {all, save, update, destory}