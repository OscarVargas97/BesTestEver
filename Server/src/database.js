require('dotenv').config();

const db = require('mongoose')
const uri = 'mongodb+srv://' +
	process.env.DB_USER +
	':' +
	process.env.DB_PASS +
	'@' +
	process.env.DB_HOST +
	'/' +
	process.env.APPNAME +
	'?retryWrites=true&w=majority';

//mongoose.connect('mongodb+srv://oscar:mamilaura1@cluster0.j3ioftv.mongodb.net/bestestever?retryWrites=true&w=majority')
db.connect(uri)

module.exports = db;