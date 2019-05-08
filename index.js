var express = require('express');
var app = express();

var mongoose = require('mongoose');
const imageList = require('./model/imagemodel')

const cors = require("cors")
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json())


app.post('/api/uploadImageList', (req, res) => {
    var imageArray = new imageList({ images: req.body });
    imageArray.save();
    res.send(req.body)
})

mongoose.connect('mongodb://imageUpload:imageUpload1@ds151596.mlab.com:51596/image_database');

mongoose.connection.once('open', () => {
    console.log('database connected')
})

app.listen(4000, () => {
    console.log("server running at the port 4000")
})