var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 8080

console.log ("Point your broswer to Port http://localhost:5000");

