const Users = require('../models/user.model');

const User = {
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req,res) => {
        const user = Users(req.body)
        const saveUser = await user.save()
        res.status(201).send(saveUser._id )
    }
}

module.exports = User