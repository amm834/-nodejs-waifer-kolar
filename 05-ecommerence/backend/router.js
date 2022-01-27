import PromiseRouter from "express-promise-router";

class Router {
	static #instance = null

	static getInstance() {
		if (!this.#instance) {
			this.#instance = new PromiseRouter()
		}
		return this.#instance;
	}
}

export default Router;