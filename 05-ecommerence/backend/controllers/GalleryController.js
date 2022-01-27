import Gallery from "../models/Gallery.js";

const save = (gallery) => {
	return Gallery.create(gallery)
}

const all = () => {
	return Gallery.find({})
}

export {save, all}