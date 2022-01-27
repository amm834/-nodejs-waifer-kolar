import mongoose from "mongoose";

const {Schema} = mongoose;

const GallerySchema = new Schema({
	name: {type: String, required: true}
})

export default mongoose.model('Gallery', GallerySchema)
