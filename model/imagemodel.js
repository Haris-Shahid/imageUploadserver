var mongoose = require('mongoose')
var Schema = mongoose.Schema


var ImageSchema = new Schema({
        images: [{ imageLink: String, name: String }],
})

const imageList = mongoose.model('imagesLinks', ImageSchema)

module.exports = imageList;