var express = require('express')
var multer  = require('multer')

var port = process.env.PORT || 8080;
var app = express()


////// serve static index.html
app.route('/').get(function (req, res) {
	res.sendFile(process.cwd()+'/public/upload.html');
});

////// multer DiskStorage options
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

////// listen for form post request 'thefile'
app.post('/api/up', multer({ storage: storage }).single('thefile'), function(req,res){
	var alert = req.file.size
  res.send(alert.toString());
	res.status(204).end();
});

////// start server
app.listen(port, function() {
	console.log('server listening')
})