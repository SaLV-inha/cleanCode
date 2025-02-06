const mongoose = require('mongoose')

const userDb = process.env.MONGO_USER
const passDb = process.env.MONGO_PASS

const url = `mongodb://${userDb}:${passDb}@mongo:27017/`;

const connectDb = async () => {
	await mongoose.connect( url )
}

module.exports = connectDb