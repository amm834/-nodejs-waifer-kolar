import User from "../models/User.js";

const all = () => {
	return User.find({});
}

const save = (user) => {
	return User.create(user)
}

const findById = (_id) => {
	return User.findById(_id)
}

const findByEmail = (email) => {
	return User.findOne({email})
}

export {all, save, findById, findByEmail}