
const { getUser, getUserById } = require('./getUsers/getUsers');
const createUser = require('./createUser/createUser');
const deleteUser  = require('./deleteUser/deleteUser');
const updateUser  = require('./updateUser/updateUser');


module.exports = {
    getUser,
    createUser,
    deleteUser,
    getUserById,
    updateUser
}

