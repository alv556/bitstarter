var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var infile = "index.html";
var buffer = new Buffer(100);

app.get('/', function(request, response) {
  buffer.write(fs.readFileSync(infile), 'utf-8'); 
  response.send(buffer.toString("utf8") );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
