import {all} from "../models/Category.js";
import {all as galleriesAll} from '../models/Gallery.js'
import {paginate, save} from "../models/Product.js";


const uploadImage = async (req, res) => {
	const saved = await save({
		name: req.file.filename
	})
	if (!saved) {
		res.status(422).json({
			condition: false,
			message: "Image upload failed"
		})
	}
	// section onImageUploadSuccess
	/*
	*               ___                            _   _       _                 _ ____
	*    ___  _ __ |_ _|_ __ ___   __ _  __ _  ___| | | |_ __ | | ___   __ _  __| / ___| _   _  ___ ___ ___  ___ ___
	*   / _ \| '_ \ | || '_ ` _ \ / _` |/ _` |/ _ \ | | | '_ \| |/ _ \ / _` |/ _` \___ \| | | |/ __/ __/ _ \/ __/ __|
	*  | (_) | | | || || | | | | | (_| | (_| |  __/ |_| | |_) | | (_) | (_| | (_| |___) | |_| | (_| (_|  __/\__ \__ \
	*   \___/|_| |_|___|_| |_| |_|\__,_|\__, |\___|\___/| .__/|_|\___/ \__,_|\__,_|____/ \__,_|\___\___\___||___/___/
	*                                   |___/           |_|
	*/

	res.json({
		conditon: true,
		message: "Image upload success"
	})
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

const createProduct = async (req, res) => {
	const {cat_id, name, price, image, description} = req.body;
	const errors = []
	if (!cat_id) {
		errors.push("Cat id field is required")
	}
	if (!name) {
		errors.push("Name field is required")
	}
	if (!price) {
		errors.push("Price field is required")
	}
	if (!description) {
		errors.push("Description field is required")
	}
	if (!image) {
		errors.push("Image field is required")
	}
	if (!cat_id || !name || !price || !description || !image) {
		res.status(422).json({
			condition: false,
			message: "Validation error",
			errors
		})
	}

	// section onProuctValidationPassed
	/*
	*               ____                       _ __     __    _ _     _       _   _             ____                        _
	*    ___  _ __ |  _ \ _ __ ___  _   _  ___| |\ \   / /_ _| (_) __| | __ _| |_(_) ___  _ __ |  _ \ __ _ ___ ___  ___  __| |
	*   / _ \| '_ \| |_) | '__/ _ \| | | |/ __| __\ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \| |_) / _` / __/ __|/ _ \/ _` |
	*  | (_) | | | |  __/| | | (_) | |_| | (__| |_ \ V / (_| | | | (_| | (_| | |_| | (_) | | | |  __/ (_| \__ \__ \  __/ (_| |
	*   \___/|_| |_|_|   |_|  \___/ \__,_|\___|\__| \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|_|   \__,_|___/___/\___|\__,_|
	*
	*/

	try {
		const product = await save({cat_id, name, price, image, description})
		res.status(422).json({
			condition: true,
			data: product
		})
	} catch (error) {
		res.status(422).json({
			condition: false,
			message: "Failed to create new product",
			error
		})
	}
}


export {uploadImage, getPaginatedProducts, getAllCats, getAllGalleries, createProduct}