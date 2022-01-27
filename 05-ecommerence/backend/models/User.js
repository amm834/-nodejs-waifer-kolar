import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	since: {type: Date, required: true}
});

const User = mongoose.model('User', UserSchema)

const all = () => {
	return User.find({});
}

const save = (user) => {
	user['since'] = Date.now()
	return User.create(user)
}

const findById = (_id) => {
	return User.findById(_id)
}

const findByEmail = (email) => {
	return User.findOne({email})
}

export {all, save, findById, findByEmail}