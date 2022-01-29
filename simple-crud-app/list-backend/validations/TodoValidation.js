import {check, query} from "express-validator";

export const CreateValidation = [
	check('name', 'Task must not be empty').not().isEmpty()
];

export const GetTodoParamValidation = [
	query('id').not().isEmpty().isNumeric()
]

