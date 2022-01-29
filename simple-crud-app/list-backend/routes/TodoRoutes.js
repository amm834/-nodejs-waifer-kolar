import Router from "../router.js";
import * as TodoController from '../controllers/TodoController.js';
import TodoValidation from "../validations/TodoValidation.js";

const router = Router.getInstance();

router.get('/', TodoController.index)
	.post('/create', TodoValidation, TodoController.create)
	.get('/show/:id', TodoController.show)
	.post('/update/:id', TodoController.update)
	.delete('/delete/:id', TodoController.destory)

export default router;
