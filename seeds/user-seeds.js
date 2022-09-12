const { User } = require('../models');

const userData = [{
        username: 'Megharp',
        password: 'megharp'
},
{
    username: 'Meghan',
    password: 'meghan'
},
{
    username: 'Maggie',
    password: 'maggie'
}
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;