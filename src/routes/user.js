const express = require('express')
const router = express.Router()

const { getUser, getUserById, createUser, deleteUser, updateUser } = require('../userCases/userController.js')

router.get('/users', getUser )

router.get('/users/:id', getUserById )

router.post('/users',createUser )

router.delete('/users/:id', deleteUser )

router.patch('/users/:id', updateUser )

module.exports = router;