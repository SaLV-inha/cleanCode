const User = require('../../models/user')

async function getUser() {
    try {
        const users = await User.find()
        return(users)
    } catch (error) {
        return(error)
    }
}

module.exports = getUser