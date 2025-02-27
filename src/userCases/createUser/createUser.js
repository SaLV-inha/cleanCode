const User = require('../../models/user')

async function createUser( req, res) {
    try {
        const params = { ...req.body }
        const user = new User(params)
        await user.save()
        res.status(200).json(user.id)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = createUser