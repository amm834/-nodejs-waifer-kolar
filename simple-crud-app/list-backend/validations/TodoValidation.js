import {check} from "express-validator";

const TodoValidation = [
	check('name', 'Task must not be empty').not().isEmpty()
];
export default TodoValidation;