// section Get All Data
/*
*    ____      _         _    _ _    ____        _
*   / ___| ___| |_      / \  | | |  |  _ \  __ _| |_ __ _
*  | |  _ / _ \ __|    / _ \ | | |  | | | |/ _` | __/ _` |
*  | |_| |  __/ |_    / ___ \| | |  | |_| | (_| | || (_| |
*   \____|\___|\__|  /_/   \_\_|_|  |____/ \__,_|\__\__,_|
*
*/

import List from "../models/List.js";

export const index = async (req, res) => {
	try {
		const lists = await List.find({})
		res.json({
			message: "List fetched successfully",
			data: lists
		})
	} catch (error) {
		res.status(422).json({
			message: "Cannot get list for this time",
			error: error
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
	let {task} = req.body;
	console.log(req.body)
	const taskObj = {task, since: Date.now()}
	try {
		const result = await List.create(taskObj)
		res.json({
			message: "Task crating successfully",
			data: result
		})
	} catch (error) {
		res.status(422).json({
			message: "Task creating failed",
			error
		})
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

export const show = (req, res) => {
	res.send('showing single data')
}

// section show single data to edit
/*
*       _                          _             _             _       _           _                    _ _ _
*   ___| |__   _____      __   ___(_)_ __   __ _| | ___     __| | __ _| |_ __ _   | |_ ___      ___  __| (_) |_
*  / __| '_ \ / _ \ \ /\ / /  / __| | '_ \ / _` | |/ _ \   / _` |/ _` | __/ _` |  | __/ _ \    / _ \/ _` | | __|
*  \__ \ | | | (_) \ V  V /   \__ \ | | | | (_| | |  __/  | (_| | (_| | || (_| |  | || (_) |  |  __/ (_| | | |_
*  |___/_| |_|\___/ \_/\_/    |___/_|_| |_|\__, |_|\___|   \__,_|\__,_|\__\__,_|   \__\___/    \___|\__,_|_|\__|
*                                          |___/
*/

export const edit = (req, res) => {
	res.send('to edit some data')
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

export const update = (req, res) => {
	res.send("update data to the db")
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

export const destory = (req, res) => {
	res.send('delete data')
}
