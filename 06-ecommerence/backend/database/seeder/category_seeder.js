import * as fs from "fs";
import * as path from "path";
import Category from "../../models/Category.js";
import __dirname from './__dirname.cjs'

const filepath = path.join(__dirname, 'data/category.json')


fs.readFile(filepath, (err, buffer) => {
	const categories = JSON.parse(buffer);
	categories.forEach(category => {
		const {name, image, id} = category;
		const document = {
			id, name, image, since: Date.now()
		}
		Category.create(document)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	})

})
