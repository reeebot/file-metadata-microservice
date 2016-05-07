var express = require('express')
var multer  = require('multer')

var port = process.env.PORT || 8080;
var app = express()


////// serve static index.html
app.route('/').get(function (req, res) {
	res.sendFile(process.cwd()+'/public/upload.html');
});

////// multer DiskStorage options
var storage = multer.memoryStorage()

////// listen for form post request 'thefile'
app.post('/api/up', multer({ storage: storage }).single('thefile'), function(req,res){
  var alert = req.file.size.toString()
  res.send(alert);
	res.status(204).end();
});

////// start server
app.listen(port, function() {
	console.log('server listening')
})