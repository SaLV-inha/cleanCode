
const getUser = require('./getUsers/getUsers');
const createUser = require('./createUser/createUser');

async function getUsers() {
    let x = await getUser()
    return x;
}

async function createNewUser(params) {
    let x = await createUser(params)
    return x;
}

module.exports = {
    getUsers,
    createNewUser
}

