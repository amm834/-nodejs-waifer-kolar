import bodyParser from "body-parser";
import 'dotenv/config'
import express from 'express'
import http from 'http'
import mongoose from "mongoose";
import Router from "./router.js";
import UserRouter from './routes/user.js'

await mongoose.connect(process.env.MONGO_URI)

const app = express()
const router = Router.getInstance()

const server = http.createServer(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)
app.use('/api/user', UserRouter)


server.listen(process.env.PORT, () => {
	console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}`)
})
