import List from "../models/Todo.js";
import Todo from "../models/Todo.js";
import {validationResult} from "express-validator";
import mongoose from "mongoose";

// section Get All Data
/*
*    ____      _         _    _ _    ____        _
*   / ___| ___| |_      / \  | | |  |  _ \  __ _| |_ __ _
*  | |  _ / _ \ __|    / _ \ | | |  | | | |/ _` | __/ _` |
*  | |_| |  __/ |_    / ___ \| | |  | |_| | (_| | || (_| |
*   \____|\___|\__|  /_/   \_\_|_|  |____/ \__,_|\__\__,_|
*
*/

export const index = async (req, res) => {
	try {
		const lists = await List.find({})
		res.json({
			data: lists
		})
	} catch (error) {
		res.status(422).json({
			message: "Cannot get list for this time", error: error
		})
	}
}

// section Create
/*
*    ____                _
*   / ___|_ __ ___  __ _| |_ ___
*  | |   | '__/ _ \/ _` | __/ _ \
*  | |___| | |  __/ (_| | ||  __/
*   \____|_|  \___|\__,_|\__\___|
*
*/

export const create = async (req, res) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			res.status(422).json({
				errors: errors.array()
			})
			return;
		}
		const data = await Todo.create({
			task: req.body.task,
			since: Date.now()
		})
		res.json({
			data
		})
	} catch (error) {
		res.status(422).json(error)
	}
}

// section Get Single Data
/*
*    ____      _      ____  _             _         ____        _
*   / ___| ___| |_   / ___|(_)_ __   __ _| | ___   |  _ \  __ _| |_ __ _
*  | |  _ / _ \ __|  \___ \| | '_ \ / _` | |/ _ \  | | | |/ _` | __/ _` |
*  | |_| |  __/ |_    ___) | | | | | (_| | |  __/  | |_| | (_| | || (_| |
*   \____|\___|\__|  |____/|_|_| |_|\__, |_|\___|  |____/ \__,_|\__\__,_|
*                                   |___/
*/

export const show = async (req, res) => {
	try {
		const errors = validationResult(req.params)
		if (!errors.isEmpty()) {
			res.json({errors: errors.array()})
			return;
		}

		const data = await Todo.findById({_id: req.params.id});
		res.json({data: data})

	} catch (error) {
		res.status(422).json(error)
	}
}


// section update single data
/*
*                   _       _              _             _             _       _
*   _   _ _ __   __| | __ _| |_ ___    ___(_)_ __   __ _| | ___     __| | __ _| |_ __ _
*  | | | | '_ \ / _` |/ _` | __/ _ \  / __| | '_ \ / _` | |/ _ \   / _` |/ _` | __/ _` |
*  | |_| | |_) | (_| | (_| | ||  __/  \__ \ | | | | (_| | |  __/  | (_| | (_| | || (_| |
*   \__,_| .__/ \__,_|\__,_|\__\___|  |___/_|_| |_|\__, |_|\___|   \__,_|\__,_|\__\__,_|
*        |_|                                       |___/
*/

export const update = async (req, res) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			res.json({errors: errors.array()})
			return;
		}

		const data = await Todo.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, {
			task: req.body.task,
			since: Date.now()
		})
		res.json({data})

	} catch (error) {
		res.status(422).json(error)
	}
}
// section delete
/*
*       _      _      _
*    __| | ___| | ___| |_ ___
*   / _` |/ _ \ |/ _ \ __/ _ \
*  | (_| |  __/ |  __/ ||  __/
*   \__,_|\___|_|\___|\__\___|
*
*/

export const destory = async (req, res) => {
	try {
		const errors = validationResult(req.params)
		if (!errors.isEmpty()) {
			res.json({errors: errors.array()})
			return;
		}
		const result = await Todo.findOneAndDelete({_id: mongoose.Types.ObjectId(req.params.id)})
		res.status(422).json({
			errors: errors.array()
		})
	} catch (error) {
		res.json(error)
	}
}
