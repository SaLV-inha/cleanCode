const User = require('../../models/user')

const getUser = async ( req, res ) => {
    try {
        const users = await User.find()
        if ( !users ) throw new Error("Users not found")
        res.json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getUserById = async ( req, res ) => {
    try {
        let { id } = req.params;
        let user = await User.findById( id );
        if ( !user ) throw new Error(" 400 User not found")
        return res.json(user)
    } catch (error) {
        return res.status(400).json(error.message)    
    }
    
}

module.exports = {
    getUser,
    getUserById
}