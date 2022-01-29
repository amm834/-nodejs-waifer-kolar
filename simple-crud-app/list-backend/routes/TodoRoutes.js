import Router from "../router.js";
import * as TodoController from '../controllers/TodoController.js';
import * as TodoValidation from "../validations/TodoValidation.js";

const router = Router.getInstance();

router.get('/', TodoController.index)
	.post('/create', TodoValidation.CreateValidation, TodoController.create)
	.get('/show/:id', TodoValidation.GetTodoParamValidation, TodoController.show)
	.put('/update/:id', TodoValidation.GetTodoParamValidation, TodoController.update)
	.delete('/delete/:id', TodoController.destory)

export default router;
