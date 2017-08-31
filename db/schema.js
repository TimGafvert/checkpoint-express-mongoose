const mongoose = require('./connection.js')

const AuthorSchema = new mongoose.Schema({
  name: String,
  publisher: String,
  age: Number,
  active: Boolean

})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author
