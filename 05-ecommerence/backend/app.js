import bodyParser from "body-parser";
import 'dotenv/config'
import express from 'express'
import http from 'http'
import mongoose from "mongoose";
import passport from "passport";
import {ExtractJwt, Strategy} from 'passport-jwt'
import {findByEmail} from './models/User.js'
import Router from "./router.js";
import AdminRouter from "./routes/admin.js";
import UserRouter from './routes/user.js'

// section monogo connecton
/*
*                                                                              _
*   _ __ ___   ___  _ __   ___   __ _  ___      ___ ___  _ __  _ __   ___  ___| |_ ___  _ __
*  | '_ ` _ \ / _ \| '_ \ / _ \ / _` |/ _ \    / __/ _ \| '_ \| '_ \ / _ \/ __| __/ _ \| '_ \
*  | | | | | | (_) | | | | (_) | (_| | (_) |  | (_| (_) | | | | | | |  __/ (__| || (_) | | | |
*  |_| |_| |_|\___/|_| |_|\___/ \__, |\___/    \___\___/|_| |_|_| |_|\___|\___|\__\___/|_| |_|
*                               |___/
*/

await mongoose.connect(process.env.MONGO_URI)

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY
}

const JwtStrategy = new Strategy(opts, function (payload, done) {
	findByEmail(payload.email)
		.then(user => {
			if (user.name === payload.name) {
				done(null, user)
			}
		})
		.catch(err => done(err, false))
})

const app = express()
const router = Router.getInstance()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
passport.use(JwtStrategy)
app.use(router)

// section routes
/*
*                   _
*   _ __ ___  _   _| |_ ___  ___
*  | '__/ _ \| | | | __/ _ \/ __|
*  | | | (_) | |_| | ||  __/\__ \
*  |_|  \___/ \__,_|\__\___||___/
*
*/

app.use('/api/user', UserRouter)
app.use('/api/admin', AdminRouter)


server.listen(process.env.PORT, () => {
	console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}`)
})
