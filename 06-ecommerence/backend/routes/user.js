import UserController from "../controllers/UserController.js";
import Router from "../router.js";

const router = Router.getInstance()

router.post('/register', UserController.register)
	.post('/login', UserController.login)

export default router