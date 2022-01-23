import express from 'express'
import 'dotenv/config'
import bodyParser from "body-parser";


const app = express()
app.use(bodyParser.urlencoded({extened: true}))

app.use('/', (req, res) => {
	res.send(`Home Page`)
})

app.get('/contact/:id', (req, res) => {
	console.log(req)
	res.send(req.params)
})

app.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT}`)
})