const User = require('../../models/user')

async function createUser(params) {
    try {
        const user = new User(params)
        await user.save()
        return(user.id)
    } catch (error) {
        return(error)
    }
}

module.exports = createUser