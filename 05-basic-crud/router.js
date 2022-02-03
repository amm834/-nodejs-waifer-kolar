import {Router as ExpressRouter} from "express";

export default class Router {
	static #instance = null;

	static getInstance() {
		if (this.#instance === null) {
			this.#instance = new ExpressRouter();
		}
		return this.#instance;
	}
}