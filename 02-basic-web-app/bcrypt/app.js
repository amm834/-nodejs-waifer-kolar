import {hash, verify} from "./password-manager.js";

hash('hello')
	.then(hash => verify('hell', hash))
	.then(result => console.log(result))
	.catch(err => console.log(err))