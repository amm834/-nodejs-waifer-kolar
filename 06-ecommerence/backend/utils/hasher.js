import bcrypt from 'bcrypt'

const saltRounds = 10

const hash = (password) => {
	return bcrypt.hash(password, saltRounds)
}

const compare = (password, passwordHash) => {
	return bcrypt.compare(password, passwordHash)
}

export {hash, compare}