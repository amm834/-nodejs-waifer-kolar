import {createServer} from 'http'
import 'dotenv/config'
import * as url from "url";

function response(req, res, filename, status = 200, headers = {'content-type': 'text/html'}) {
	res.writeHead(status, headers)
	res.end(filename)
}

const routes = {
	"GET": {
		'/': (req, res) => {
			response(req, res, 'Home page')
		},
		'/contact': (req, res) => {
			response(req, res, 'Contact page')
		},
		'/login': (req, res) => {
			response(req, res, 'Login Get page')
		}
	},
	"POST": {
		'/login': (req, res) => {
			response(req, res, 'Login Post page')
		}
	},
	"NA": (req, res) => {
		response(req, res, '404 | not found', 404)
	}
}

const server = createServer(((req, res) => {
	const method = req.method
	const parsedUrl = url.parse(req.url, true)
	const path = parsedUrl.pathname
	const validRoute = routes[method][path] ?? false;
	if (!validRoute) {
		routes["NA"](req, res)
	} else {
		routes[method][path](req, res)
	}
}))

server.listen(process.env.PORT, () => {
	console.log('Server is running at %s://%s:%s', process.env.PROTOCOL, process.env.HOST_NAME, process.env.PORT)
})

