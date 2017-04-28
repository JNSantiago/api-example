var mongoose = require('mongoose')

module.exports = function() 
{
	var schema = mongoose.Schema({
		title: String,
		description: String,
		price: Number,
		status: Boolean
	})

	return mongoose.model('Product', schema)
}