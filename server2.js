var express = require(‘express’);
var multer = require(‘multer’);

app.use(multer({ dest: ‘./public/uploads/’}))

app.post(‘/upload’, function(req, res) {

});