import Router from "../router.js";
import * as TodoController from '../controllers/TodoController.js';

export const router = Router.getInstance();

router.get('/create', TodoController.index)
