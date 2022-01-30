import {getAllGalleries, getPaginatedProducts} from "../controllers/AdminController.js";
import {getAllCats} from "../controllers/GuestController.js";
import Router from "../router.js";

const router = Router.getInstance()
router.get('/categories', getAllCats)
	.get('/galleries', getAllGalleries)
	.get('/products/:start/:count', getPaginatedProducts)
export default router;