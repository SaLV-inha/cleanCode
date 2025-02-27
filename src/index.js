const express = require('express');

const connectDb = require('./config/db.js');

const User = require('./routes/user.js');

const app = express()

app.use(express.json())

connectDb()

app.use('/api/', User)

app.listen( 8080, () =>{
	console.log('server running')
})