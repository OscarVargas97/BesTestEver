const Users = require('../models/user.model');

const Home = {
    home:(req, res) => {
        res.status(200).send("tamo guchi")
    }
}

module.exports = Home