const mongoose = require('../database')

//model
const User = mongoose.model('User',{
    username: String,
    edad: Number
});


//Function
const create = async (username, edad ) => {
    const user = new User({ username:username, edad })
    const saveUser = await user.save()
    console.log(saveUser)
}

create()