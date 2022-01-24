import express from "express";
import * as http from "http";
import 'dotenv/config'
import multer from "multer";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './images')
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		cb(null, uniqueSuffix + "-" + file.originalname)
	}
})
const upload = multer({storage})

const app = express()
const server = http.createServer(app);

app.get('/upload', upload.single('image'), (req, res) => {
	console.log(req)
})

server.listen(process.env.PORt, () => {
	console.log('Server is running')
})