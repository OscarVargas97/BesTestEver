const mongoose = require('mongoose');
//model

const Users = mongoose.model('User', {
    name: { type: String, required: true, minLenght: 3 },
    lastname: { type: String, required: true, minLenght: 3 }
});

module.exports = Users