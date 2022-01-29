import Router from "../router.js";
import * as TodoController from '../controllers/TodoController.js';

const router = Router.getInstance();

router.get('/', TodoController.index)
	.post('/create', TodoController.create)
	.get('/show/:id', TodoController.show)
	.post('/update/:id', TodoController.update)
	.delete('/delete/:id', TodoController.destory)

export default router;
