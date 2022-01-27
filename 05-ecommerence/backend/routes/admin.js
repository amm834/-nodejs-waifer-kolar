import passport from "passport";
import {
	createProduct,
	getAllCats,
	getAllGalleries,
	getPaginatedProducts,
	uploadImage
} from "../controllers/AdminController.js";
import Router from "../router.js";
import upload from "../utils/upload.js";

const router = Router.getInstance()

const middlewares = [
	passport.authenticate('jwt', {session: false}),
	upload.single('image')
];

router.post('/image/upload', ...middlewares,
	uploadImage)
	.get('/products/paginate/:start/:count', middlewares[0], getPaginatedProducts)
	.get('/categories/all', middlewares[0], getAllCats)
	.get('/galleries/all', middlewares[0], getAllGalleries)
	.post('/product/create', middlewares[0], createProduct)

export default router;