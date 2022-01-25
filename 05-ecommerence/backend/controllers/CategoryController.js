import Category from "../models/Category.js";


const all = () => {
	return Category.find({});
}

const save = (category) => {
	return Category.create(category)
}

const update = (category) => {
	return new Promise((resolve, reject) => {
		Category.findById(category.id, (error, doc) => {
			if (error) reject(error)
			doc.name = category.name
			doc.save((error, doc) => {
				if (error) reject(error)
				resolve(doc)
			})
		})
	})
}


export {all, save, update}