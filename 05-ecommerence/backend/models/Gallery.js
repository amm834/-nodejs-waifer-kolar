import mongoose from "mongoose";

const {Schema} = mongoose;

const GallerySchema = new Schema({
	name: {type: String, required: true}
})

const Gallery = mongoose.model('Gallery', GallerySchema)


const save = (gallery) => {
	return Gallery.create(gallery)
}

const all = () => {
	return Gallery.find({})
}

export {save, all}
