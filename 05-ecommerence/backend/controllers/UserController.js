import User from "../models/User.js";

const all = () => {
	return User.find({});
}

const save = (user) => {
	return User.create(user)
}

export {all, save}