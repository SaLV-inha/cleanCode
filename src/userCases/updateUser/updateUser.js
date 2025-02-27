const User = require('../../models/user')

const updateUser = async ( req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id);
            if (!user){
                throw new Error("User to update Not Found")
            }
		const userUpdated = await User.updateOne({_id:id},{$set:{...req.body}})
		res.status(200).json(`${userUpdated.modifiedCount} usuario editado`)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = updateUser