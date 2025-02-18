const express = require('express')

const router = express.Router()

const { getUsers, createNewUser } = require('../userCases/userController.js')

router.get('/', async( req, res ) =>{
	try {
		const users = await getUsers()
		res.send(users)
	} catch (error) {
		res.send(error)
	}
})

router.post('/createuser', async (req, res)=>{
	try {
		const user = await createNewUser({...req.body})
		console.log(user)
		res.send(user)
	} catch (error) {
		res.send(error.message)
		
	}
})

// router.delete('/delete', async (req, res)=>{
// 	try {
// 		const { name } = req.body;
// 		const userToDelete = await User.findOneAndDelete({name:name});
// 		if (!userToDelete) res.status(404).send("User Not Found")
// 		res.send(`User called ${name} is deleted`)
// 	} catch (error) {
// 		res.send(error.message)	
// 	}
// })

// router.patch('/:id/path', async(req, res)=>{
// 	try {
// 		const { id } = req.params
// 		const userUpdated = await User.updateOne({_id:id},{$set:{...req.body}})
// 		if (!userUpdated) res.status(404).send("User Not Found")
// 		res.send(userUpdated)
// 	} catch (error) {
// 		res.send(error.message)
// 	}
// })

module.exports = router;