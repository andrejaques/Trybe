const { User } = require('../schema/userSchema');

const insertUser = async (user) => {
    const response = await User.create(user);
    return response;
}

module.exports = {
    insertUser
}