import {all} from "../models/Category.js";
import {all as galleriesAll} from "../models/Gallery.js";
import {findProductByCatId, paginate} from "../models/Product.js";

const getAllCats = async (req, res) => {
	try {
		const cats = await all();
		res.json({
			condition: true, data: cats
		})
	} catch (error) {
		res.status(422).json({
			condition: false, error
		})
	}
}

const getAllGalleries = async (req, res) => {
	try {
		const galleries = await galleriesAll();
		res.json({
			conditon: true, data: galleries
		})
	} catch (error) {
		res.status(422).json({
			condition: false, error
		})
	}
}

const getPaginatedProducts = async (req, res) => {
	const start = Number(req.params.start)
	const count = Number(req.params.count)


	try {
		const products = await paginate(start, count)
		res.json({
			condition: true, data: products
		})
	} catch (error) {
		res.json({
			condition: false, error
		})
	}
}

const getProductById = async (req, res) => {
	try {
		const id = req.params['id']
		const products = await findProductByCatId(id)
		res.json({
			condition: true, data: products
		})
	} catch (errors) {
		res.status(422).json({
			condition: false, errors
		})
	}

}

export {getAllCats, getAllGalleries, getPaginatedProducts, getProductById}