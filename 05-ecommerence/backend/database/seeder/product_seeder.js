import * as fs from "fs";
import * as path from "path";
import __dirname from './__dirname.cjs'
import {save} from "../../models/Product.js"

const filepath = path.join(__dirname, 'data/products.json')


fs.readFile(filepath, (err, buffer) => {
	const products = JSON.parse(buffer);
	products.forEach(product => {
		const productObj = {
			cat_id: product.id,
			name: product.name,
			price: product.price,
			description: product.description,
			since: Date.now()
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
