import {all} from "../models/Category.js";
import {all as galleriesAll} from "../models/Gallery.js";
import {paginate} from "../models/Product.js";

const getAllCats = async (req, res) => {
	try {
		const cats = await all();
		res.json({
			conditon: true,
			data: cats
		})
	} catch (error) {
		res.status(422).json({
			condition: false,
			error
		})
	}
}

const getAllGalleries = async (req, res) => {
	try {
		const galleries = await galleriesAll();
		res.json({
			conditon: true,
			data: galleries
		})
	} catch (error) {
		res.status(422).json({
			condition: false,
			error
		})
	}
}

const getPaginatedProducts = async (req, res) => {
	const start = Number(req.params.start)
	const count = Number(req.params.count)


	try {
		const products = await paginate(start, count)
		res.json({
			condition: true,
			data: products
		})
	} catch (error) {
		res.json({
			condition: false,
			error
		})
	}
}

export {getAllCats,getAllGalleries,getPaginatedProducts}