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
import GuesRouter from "./routes/guest.js";
import UserRouter from './routes/user.js'

// section Monogo ORM
/*
*   __  __                                   ___  ____  __  __
*  |  \/  | ___  _ __   ___   __ _  ___     / _ \|  _ \|  \/  |
*  | |\/| |/ _ \| '_ \ / _ \ / _` |/ _ \   | | | | |_) | |\/| |
*  | |  | | (_) | | | | (_) | (_| | (_) |  | |_| |  _ <| |  | |
*  |_|  |_|\___/|_| |_|\___/ \__, |\___/    \___/|_| \_\_|  |_|
*                            |___/
*/

await mongoose.connect(process.env.MONGO_URI)

// section Middlewares
/*
*   __  __ _     _     _ _
*  |  \/  (_) __| | __| | | _____      ____ _ _ __ ___  ___
*  | |\/| | |/ _` |/ _` | |/ _ \ \ /\ / / _` | '__/ _ \/ __|
*  | |  | | | (_| | (_| | |  __/\ V  V / (_| | | |  __/\__ \
*  |_|  |_|_|\__,_|\__,_|_|\___| \_/\_/ \__,_|_|  \___||___/
*
*/

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

// section Bootstrap Application
/*
*   ____              _       _                         _                _ _           _   _
*  | __ )  ___   ___ | |_ ___| |_ _ __ __ _ _ __       / \   _ __  _ __ | (_) ___ __ _| |_(_) ___  _ __
*  |  _ \ / _ \ / _ \| __/ __| __| '__/ _` | '_ \     / _ \ | '_ \| '_ \| | |/ __/ _` | __| |/ _ \| '_ \
*  | |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |   / ___ \| |_) | |_) | | | (_| (_| | |_| | (_) | | | |
*  |____/ \___/ \___/ \__|___/\__|_|  \__,_| .__/   /_/   \_\ .__/| .__/|_|_|\___\__,_|\__|_|\___/|_| |_|
*                                          |_|              |_|   |_|
*/

const app = express()
const router = Router.getInstance()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
passport.use(JwtStrategy)
app.use(router)

// section endpoints
/*
*                  _             _       _
*    ___ _ __   __| |_ __   ___ (_)_ __ | |_ ___
*   / _ \ '_ \ / _` | '_ \ / _ \| | '_ \| __/ __|
*  |  __/ | | | (_| | |_) | (_) | | | | | |_\__ \
*   \___|_| |_|\__,_| .__/ \___/|_|_| |_|\__|___/
*                   |_|
*/

app.use('/', GuesRouter)
app.use('/api/user', UserRouter)
app.use('/api/admin', AdminRouter)


server.listen(process.env.PORT, () => {
	console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}`)
})
