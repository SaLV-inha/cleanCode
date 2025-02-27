const User = require('../../models/user')

const deleteUser = async ( req , res = response ) => {
    let { id } = req.params
    const userToDelete = await User.findById(id);
    if (!userToDelete){
        return res.status(404).json("User Not Found")
    } 
    const userDeleted = User.findOneAndDelete({id:id});
    return res.json(userDeleted)
}

module.exports = deleteUser