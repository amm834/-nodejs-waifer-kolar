import * as fs from "fs";
import * as path from "path";
import {save} from "../../models/Product.js"
import __dirname from './__dirname.cjs'

const filepath = path.join(__dirname, 'data/products.json')


fs.readFile(filepath, (err, buffer) => {
	const products = JSON.parse(buffer);
	products.forEach(product => {
		const productObj = {
			cat_id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			description: product.description,
		}

		console.log(productObj)
		save(productObj).then(res => {
			console.log(res)
		})
			.catch(err => {
				console.log(err)
			})

	})

})
