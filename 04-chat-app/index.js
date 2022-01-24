import express from 'express'
import * as http from "http";
import 'dotenv/config'
import bodyParser from "body-parser";
import jwt from 'jsonwebtoken'
import {ExtractJwt, Strategy as JwtStrategy} from 'passport-jwt'
import passport from "passport";

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;


const jwtStrategy = new JwtStrategy(opts, function (payload, done) {
	const validated = payload.email === 'hello@test.com'
	if (validated) {
		done(null, {data: true})
	} else {
		done('Unauntenicated')
	}
})
passport.use(jwtStrategy)


const token = jwt.sign({
	email: 'hello@test.com',
}, process.env.SECRET_KEY)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const server = http.createServer(app)

const db = new Map()

app.get('/', (req, res) => {
	res.json({
		data: "Welcome to home page!"
	})
})

app.get('/free', (req, res) => {
	res.json({
		data: "Free Route"
	})
})

app.get('/paid', passport.authenticate('jwt', {session: false}), (req, res) => {
	res.json({
		data: "Paid route avaliable only for premium user"
	})
})

app.get('/login', (req, res) => {
	const {email, password} = req.body;
	if (email === 'hello@test.com' && password === '123') {
		res.json({
			token
		})
	}
	res.send("Invalid Credentials")
})

server.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT}`)
})



