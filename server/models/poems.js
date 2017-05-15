var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var poemsSchema = new Schema({
	username: String,
	line1: String,
	line2: String,
	line3: String,
	thumbnail: String,
	date: {type: Date, default: Date.now}
})

var Content = mongoose.model('Poem', poemsSchema);

module.exports = Content;