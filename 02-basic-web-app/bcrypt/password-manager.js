import bcrypt from 'bcrypt'

export const hash = (plainText) => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(plainText, salt, (err, hash) => {
				if (err) reject(err)
				resolve(hash)
			})
		})
	})
}

export const verify = (plainText, hashedValue) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(plainText, hashedValue, (err, result) => {
			if (err) reject(err)
			resolve(result)
		})
	})
}