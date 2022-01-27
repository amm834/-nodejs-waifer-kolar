import multer from "multer";
import * as path from "path";
import __dirname from './__dirname.cjs'

const storagePath = path.join(__dirname, '../storage/images')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, storagePath)
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		cb(null, uniqueSuffix + '_' + file.originalname)
	}
})

export default multer({storage: storage})