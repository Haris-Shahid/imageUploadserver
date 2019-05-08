var express = require('express');
var app = express();
const port = process.env.PORT || 4000;

var mongoose = require('mongoose');
const imageList = require('./model/imagemodel')

const cors = require("cors")
app.use(cors());
mongoose.connect('mongodb://imageUpload:imageUpload1@ds151596.mlab.com:51596/image_database', { useNewUrlParser: true });

var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.post('/api/uploadImageList', (req, res) => {
    var imageArray = new imageList({ images: req.body });
    imageArray.save();
    res.send(req.body)
})

app.get('/api/uploadImageList', (req, res, next) => {
    imageList.find({})
        .then((data) => {
            res.send(data)
        })
        .catch(next)
})

mongoose.connection.once('open', () => {
    console.log('database connected')
})

app.listen(port, () => {
    console.log("server running at the port " + port)
})