const connect = require('mongoose');


const uri = "mongodb+srv://" + url.QueryEscape(username) + ":" + 
		url.QueryEscape(password) + "@" + cluster + 
		"/?authSource=" + authSource +
		"&authMechanism=" + authMechanism
//connect.connect('mongodb+srv://'+ process.env.DB_USER +':<'+ process.env.DB_PASS + '>' + '@' + process.env.DB_HOST +'/' +process.env.APPNAME +'?retryWrites=true&w=majority');
connect.connect(uri)

module.exports = connect;