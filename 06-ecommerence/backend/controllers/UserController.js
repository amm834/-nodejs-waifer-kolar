import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import {saveOrders} from "../models/Order.js";
import {findByEmail, save} from '../models/User.js'
import * as hasher from "../utils/hasher.js";


const register = async (req, res) => {
	const {name, email, password} = req.body
	const errors = []
	if (!name) {
		errors.push("Name field is required")
	}
	if (!email) {
		errors.push("Email field is required")
	}
	if (!password) {
		errors.push("Password field is required")
	}
	if (!name || !email || !password) {
		res.status(422).json({
			condition: false,
			message: "Validation errors",
			errors
		})
	}

	const hashedPassword = await hasher.hash(password)
	if (hashedPassword) {
		const user = await save({name, email, password: hashedPassword})
		if (!user) {
			res.status(422).json({
				condition: false,
				message: "User registration failed",
			})
		}

		res.json({
			condition: true,
			message: "User registration success",
			data: user
		})
	}


}

const login = async (req, res) => {
	const {email, password} = req.body;
	const errors = []

	if (!email) {
		errors.push("Email field is required")
	}
	if (!password) {
		errors.push("Password field is required")
	}
	if (!email || !password) {
		res.status(422).json({
			condition: false,
			message: "Validation errors",
			errors
		})
	}

	const user = await findByEmail(email)
	if (!user) {
		res.status(422).json({
			condition: false,
			message: "Invalid email or password"
		})
	}

	const userPassword = user.password;
	const validated = await hasher.compare(password, userPassword)
	if (!validated) {
		res.status(422).json({
			condition: false,
			message: "Invalid email or password"
		})
	}

	// section onValidated
	/*
	*            __     __    _ _     _       _           _
	*    ___  _ _\ \   / /_ _| (_) __| | __ _| |_ ___  __| |
	*   / _ \| '_ \ \ / / _` | | |/ _` |/ _` | __/ _ \/ _` |
	*  | (_) | | | \ V / (_| | | | (_| | (_| | ||  __/ (_| |
	*   \___/|_| |_|\_/ \__,_|_|_|\__,_|\__,_|\__\___|\__,_|
	*
	*/

	const token = jwt.sign({
		email: user.email,
		name: user.name
	}, process.env.SECRET_KEY)

	res.json({
		condition: true,
		message: "Login success",
		token,
		data: user
	})

}

const saveOrder = async (req, res) => {
	try {
		const {uid, ords} = req.fields;
		const result = await saveOrders({uid: mongoose.Types.ObjectId(uid), ords})
		res.json({
			condition: true,
			data: result
		})
	} catch (errors) {
		res.status(422).json({
			errors
		})
	}
}


export default {register, login, saveOrder}