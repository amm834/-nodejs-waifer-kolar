import passport from "passport";
import {getPaginatedProducts, uploadImage} from "../controllers/AdminController.js";
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

export default router;