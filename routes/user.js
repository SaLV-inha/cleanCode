const express = require('express')

const router = express.Router()

const User = require('../models/user');

router.get('/', async( req, res ) =>{
	try {
		const users = await User.find()
		res.send(users)
	} catch (error) {
		res.send(error)
	}
})

router.post('/post', async (req, res)=>{
	try {
		const user = new User({...req.body})
		await user.save()
		res.send(user.id)
	} catch (error) {
		res.send(error.message)
		
	}
})

router.delete('/delete', async (req, res)=>{
	try {
		const { name } = req.body;
		const userToDelete = await User.findOneAndDelete({name:name});
		if (!userToDelete) res.status(404).send("User Not Found")
		res.send(`User called ${name} is deleted`)
	} catch (error) {
		res.send(error.message)	
	}
})

router.patch('/:id/path', async(req, res)=>{
	try {
		const { id } = req.params
		const userUpdated = await User.updateOne({_id:id},{$set:{...req.body}})
		if (!userUpdated) res.status(404).send("User Not Found")
		res.send(userUpdated)
	} catch (error) {
		res.send(error.message)
	}
})

module.exports = router;