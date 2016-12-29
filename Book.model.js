var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    category: {
        type: String,
        default: "book"
    }
});

module.exports = mongoose.model('Book', BookSchema);