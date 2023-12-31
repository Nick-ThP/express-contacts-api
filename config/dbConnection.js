const mongoose = require('mongoose')

const connectDb = async () => {
	try {
		const connect = await mongoose.connect(process.env.CONNECTION_STRING)
		console.log('Database succesfully connected -', 'host:', connect.connection.host, '- name:', connect.connection.name)
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
}

module.exports = connectDb
