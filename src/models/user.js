const mongoose = require('mongoose');

const { Schema } = mongoose;

function validateEmail (email) { 
	const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regx.test(email)
}

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		email: {
			type: String,
			trim: true,
			lowercase: true,
			unique: true,
			required: true,
			validate: [validateEmail, 'Please fill a valid email address'],
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
		}
	},
	{
		timestamps: true
	}
)
module.exports = mongoose.model("User", userSchema)